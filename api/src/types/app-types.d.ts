import {Response} from "express";

interface accountsResponse extends Response {
  id: Number,
  name : String,
  balance : Number,
}

interface AuthResponse extends Response {
  access_token: Number,
  expires_at : String,
}

declare module "app-types";

