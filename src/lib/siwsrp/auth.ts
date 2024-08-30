import { SDK } from "@metamask-previews/profile-sync-controller";
import jwt from "jsonwebtoken";

type HydraEnv = {
  authApiUrl: string;
  oidcApiUrl: string;
  userStorageApiUrl: string;
  env: SDK.Env;
  platform: SDK.Platform;
};

const { AuthType, Env, getEnvUrls, JwtBearerAuth, Platform } = SDK
export const AUTH_WALLET_PAIRING = 'auth.wallet.pairing'
export const AUTH_WALLET_SESSION_NAME = 'auth.wallet.session'
export const AUTH_WALLET_TOKEN = 'auth.wallet.token'
export const AUTH_WALLET_PROJECTS = 'auth.wallet.projects'
export const AUTH_WALLET_USER_PLAN = 'auth.wallet.uksTier'

export const getHydraEnv = (): HydraEnv => {
  const platform = Platform.INFURA;

  if (process.env.VERCEL_ENV === "production") {
    return {
      ...getEnvUrls(Env.PRD),
      env: Env.PRD,
      platform,
    };
  } else {
    return {
      ...getEnvUrls(Env.DEV),
      env: Env.DEV,
      platform,
    };
  }
};

const storage: SDK.AuthStorageOptions = {
  getLoginResponse: async () => {
    const storedResponse = localStorage.getItem(AUTH_WALLET_SESSION_NAME);
    return storedResponse ? JSON.parse(storedResponse) : null;
  },
  setLoginResponse: async (val: SDK.LoginResponse) => {
    localStorage.setItem(AUTH_WALLET_SESSION_NAME, JSON.stringify(val));
  },
};

export const auth = new JwtBearerAuth(
  {
    env: getHydraEnv().env,
    platform: getHydraEnv().platform,
    type: AuthType.SRP,
  },
  {
    storage,
  },
);

export const authenticateAndAuthorize = async () => {
  let accessToken: string, userProfile: SDK.UserProfile;
  try {
    await auth.connectSnap();
    accessToken = await auth.getAccessToken();
    userProfile = await auth.getUserProfile();
  } catch (e: any) {
    throw new Error(e.message);
  }

  return {
    accessToken,
    userProfile,
  };
};

export const saveTokenString = (token: string) => {
  sessionStorage.setItem(AUTH_WALLET_TOKEN, token);
};

export const getTokenString = (): string => {
  return sessionStorage.getItem(AUTH_WALLET_TOKEN)
}

export const getUksTier = (): string => {
  return sessionStorage.getItem(AUTH_WALLET_USER_PLAN)
}

export const getUserIdFromJwtToken = () => {
  const token = sessionStorage.getItem(AUTH_WALLET_TOKEN);
  const decoded = jwt.decode(token as string, { complete: true }) as jwt.Jwt;
  const { id } = decoded.payload as jwt.Payload;
  return id;
};

export const clearStorage = () => {
  sessionStorage.clear();
  localStorage.removeItem(AUTH_WALLET_PAIRING);
  localStorage.removeItem(AUTH_WALLET_SESSION_NAME);
  localStorage.removeItem(AUTH_WALLET_TOKEN);
  localStorage.removeItem(AUTH_WALLET_PROJECTS);
};
