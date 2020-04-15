import app from "../../config/firebase-config";
import "firebase/analytics";
import "firebase/auth";
import "firebase/database";

export const analitycs = app.analytics();
export const auth = app.auth();
export const db = app.database();