import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(`mongodb://${process.env.MONGO_DB_URI_USER_NAME}:${process.env.MONGO_DB_URI_PASSWORD}@ac-ihuorhv-shard-00-00.eic1loz.mongodb.net:27017,ac-ihuorhv-shard-00-01.eic1loz.mongodb.net:27017,ac-ihuorhv-shard-00-02.eic1loz.mongodb.net:27017/?ssl=true&replicaSet=atlas-1jcxjg-shard-0&authSource=admin`);
const db = client.db("hireloop");
    
export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL, 
    emailAndPassword: {
        enabled: true,
    },
    user: {
        additionalFields: {
            role: {
                type: ["seeker", "recruiter", "admin"],
                input: true,
                defaultValue: "seeker",
            },
        },
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    database: mongodbAdapter(db, {
        client,
    }),
});


