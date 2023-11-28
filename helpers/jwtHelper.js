import JWT from "jsonwebtoken";
import { client } from "../helpers/initRedis";

export const accessTokenFunc = (userId) => {
  return new Promise((resolve, reject) => {
    const payload = {};
    // console.log(userId.toString());
    const secret = process.env.ACCESS_TOKEN_SECRET;
    const options = {
      expiresIn: "1d",
      audience: userId,
    };
    JWT.sign(payload, secret, options, (err, token) => {
      if (err) {
        console.log(err.message);
        reject();
        return;
      }
      resolve(token);
    });
  });
};

export const verifyTokenFunc = (req, res, next) => {
  if (!req.headers["authorization"])
    return next(res.status(401).json("Unauthorized"));
  const authHeader = req.headers["authorization"];
  const bearerToken = authHeader.split(" ");
  const token = bearerToken[1];
  JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) {
      return next(res.status(401).json("Unauthorized"));
    } else {
      req.payload = payload;
      next();
    }
  });
};

export const refreshTokenFunc = (userId) => {
  return new Promise((resolve, reject) => {
    const payload = {};
    const secret = process.env.REFRESH_TOKEN_SECRET;
    const options = {
      expiresIn: "1y",
      audience: userId,
    };
    JWT.sign(payload, secret, options, async (err, token) => {
      if (err) {
        console.log(err.message);
        reject();
        return;
      }

      //use redis
      await client.set(
        userId,
        token,
        {
          EX: 365 * 24 * 60 * 60,
        },
        (err, reply) => {
          if (err) {
            console.log(err.message);
            reject();
            return;
          }
        }
      );

      // const value = await client.get(userId);
      // console.log(value);
      resolve(token);
    });
  });
};

export const verifyRefreshTokenFunc = (refreshToken) => {
  return new Promise((resolve, reject) => {
    JWT.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, payload) => {
        if (err) return reject(res.status(401).json("Unauthorized"));
        const userId = payload.aud;

        const value = await client.get(userId, (err, result) => {
          if (err) {
            console.log(err.message);
            reject();
            return;
          }
          return result;
        });
        if (refreshToken === value) {
          return resolve(userId);
        } else {
          reject(res.status(401).json("Unauthorized"));
        }
      }
    );
  });
};
