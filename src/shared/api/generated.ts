/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Block list
 * OpenAPI spec version: 1.0.0
 */
import { createInstance } from "./api-instance";
import type { BodyType } from "./api-instance";
export interface PostBodyDto {
  authorId: number;
  categoryId: number;
  content: string;
  title: string;
}

export type PostDtoCategoryId = { [key: string]: any };

export interface PostDto {
  authorId: number;
  categoryId: PostDtoCategoryId;
  content: string;
  date: string;
  id: number;
  title: string;
}

export interface PatchAccountDto {
  points: number;
}

export interface AccountDto {
  id: number;
  ownerId: number;
  points: number;
}

export interface GetSessionInfoDto {
  email: string;
  exp: number;
  iat: number;
  id: number;
}

export interface SignInBodyDto {
  email: string;
  password: string;
}

export interface SignUpBodyDto {
  email: string;
  password: string;
}

export interface HelloWorldDto {
  message: string;
}

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

export const appControllerGetHello = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<HelloWorldDto>(
    {
      url: `/api`,
      method: "GET",
    },
    options,
  );
};

export const authControllerSignUp = (
  signUpBodyDto: BodyType<SignUpBodyDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/api/auth/sign-up`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: signUpBodyDto,
    },
    options,
  );
};

export const authControllerSignIn = (
  signInBodyDto: BodyType<SignInBodyDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/api/auth/sign-in`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: signInBodyDto,
    },
    options,
  );
};

export const authControllerSignOut = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/api/auth/sign-out`,
      method: "POST",
    },
    options,
  );
};

export const authControllerGetSessionInfo = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<GetSessionInfoDto>(
    {
      url: `/api/auth/session`,
      method: "GET",
    },
    options,
  );
};

export const accountControllerGetAccount = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<AccountDto>(
    {
      url: `/api/account`,
      method: "GET",
    },
    options,
  );
};

export const accountControllerPatchAccount = (
  patchAccountDto: BodyType<PatchAccountDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<AccountDto>(
    {
      url: `/api/account`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: patchAccountDto,
    },
    options,
  );
};

export const blogControllerIndex = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<PostDto[]>(
    {
      url: `/api/blog`,
      method: "GET",
    },
    options,
  );
};

export const blogControllerCreate = (
  postBodyDto: BodyType<PostBodyDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<PostDto>(
    {
      url: `/api/blog`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: postBodyDto,
    },
    options,
  );
};

export const blogControllerShow = (
  id: number,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<PostDto>(
    {
      url: `/api/blog/${id}`,
      method: "GET",
    },
    options,
  );
};

export type AppControllerGetHelloResult = NonNullable<
  Awaited<ReturnType<typeof appControllerGetHello>>
>;
export type AuthControllerSignUpResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignUp>>
>;
export type AuthControllerSignInResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignIn>>
>;
export type AuthControllerSignOutResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignOut>>
>;
export type AuthControllerGetSessionInfoResult = NonNullable<
  Awaited<ReturnType<typeof authControllerGetSessionInfo>>
>;
export type AccountControllerGetAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerGetAccount>>
>;
export type AccountControllerPatchAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerPatchAccount>>
>;
export type BlogControllerIndexResult = NonNullable<
  Awaited<ReturnType<typeof blogControllerIndex>>
>;
export type BlogControllerCreateResult = NonNullable<
  Awaited<ReturnType<typeof blogControllerCreate>>
>;
export type BlogControllerShowResult = NonNullable<
  Awaited<ReturnType<typeof blogControllerShow>>
>;
