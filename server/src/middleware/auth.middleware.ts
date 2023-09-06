import dotenv from "dotenv";
import { Request, Response } from "express";
import jwkToPem from "jwk-to-pem";
import jwt from "jsonwebtoken";
import fetch from "node-fetch";

dotenv.config();

let pems: { [key: string]: any } = {};

class AuthMiddleware {
  private poolRegion: string = process.env.POOLREGION as string;
  private userPoolId: string = process.env.USERPOOLID as string;

  constructor() {
    this.setUp();
  }

  public verifyToken(req: Request, resp: Response, next: any): void {
    let token = "";

    if (req.headers.authorization) {
      token = req.headers.authorization.substring(
        7,
        req.headers.authorization.length
      );
    } else {
      resp.status(401).json({ error: "No Authorization header" }).end();
      return;
    }

    if (!token) {
      resp.status(401).end();
      return;
    }
    let decodedJwt: any = jwt.decode(token, { complete: true });
    if (decodedJwt === null) {
      resp.status(401).json({ error: "Invalid jwt token." }).end();
      return;
    }

    let kid = decodedJwt.header.kid;
    let pem = pems[kid];

    if (!pem) {
      resp.status(401).end();
      return;
    }

    jwt.verify(token, pem, function (err: any, payload: any) {
      if (err) {
        resp.status(401).end();
        return;
      } else {
        next();
      }
    });
  }

  private async setUp() {
    const URL = `https://cognito-idp.${this.poolRegion}.amazonaws.com/${this.userPoolId}/.well-known/jwks.json`;

    try {
      const response = await fetch(URL);
      if (response.status !== 200) {
        throw "request not successful";
      }
      const data: any = await response.json();
      const { keys } = data;
      for (let i = 0; i < keys.length; i++) {
        const key_id = keys[i].kid;
        const modulus = keys[i].n;
        const exponent = keys[i].e;
        const key_type = keys[i].kty;
        const jwk = { kty: key_type, n: modulus, e: exponent };
        const pem = jwkToPem(jwk);
        pems[key_id] = pem;
      }
    } catch (error) {
      console.log(error);
      console.log("Error! Unable to download JWKs");
    }
  }
}

export default AuthMiddleware;
