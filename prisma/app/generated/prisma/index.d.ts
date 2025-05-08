
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Band
 * 
 */
export type Band = $Result.DefaultSelection<Prisma.$BandPayload>
/**
 * Model Venue
 * 
 */
export type Venue = $Result.DefaultSelection<Prisma.$VenuePayload>
/**
 * Model BandMember
 * 
 */
export type BandMember = $Result.DefaultSelection<Prisma.$BandMemberPayload>
/**
 * Model VenueStaffRole
 * 
 */
export type VenueStaffRole = $Result.DefaultSelection<Prisma.$VenueStaffRolePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.band`: Exposes CRUD operations for the **Band** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bands
    * const bands = await prisma.band.findMany()
    * ```
    */
  get band(): Prisma.BandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venue`: Exposes CRUD operations for the **Venue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Venues
    * const venues = await prisma.venue.findMany()
    * ```
    */
  get venue(): Prisma.VenueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bandMember`: Exposes CRUD operations for the **BandMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BandMembers
    * const bandMembers = await prisma.bandMember.findMany()
    * ```
    */
  get bandMember(): Prisma.BandMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venueStaffRole`: Exposes CRUD operations for the **VenueStaffRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VenueStaffRoles
    * const venueStaffRoles = await prisma.venueStaffRole.findMany()
    * ```
    */
  get venueStaffRole(): Prisma.VenueStaffRoleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Band: 'Band',
    Venue: 'Venue',
    BandMember: 'BandMember',
    VenueStaffRole: 'VenueStaffRole'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "band" | "venue" | "bandMember" | "venueStaffRole"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Band: {
        payload: Prisma.$BandPayload<ExtArgs>
        fields: Prisma.BandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload>
          }
          findFirst: {
            args: Prisma.BandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload>
          }
          findMany: {
            args: Prisma.BandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload>[]
          }
          create: {
            args: Prisma.BandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload>
          }
          createMany: {
            args: Prisma.BandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload>[]
          }
          delete: {
            args: Prisma.BandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload>
          }
          update: {
            args: Prisma.BandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload>
          }
          deleteMany: {
            args: Prisma.BandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload>[]
          }
          upsert: {
            args: Prisma.BandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandPayload>
          }
          aggregate: {
            args: Prisma.BandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBand>
          }
          groupBy: {
            args: Prisma.BandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BandCountArgs<ExtArgs>
            result: $Utils.Optional<BandCountAggregateOutputType> | number
          }
        }
      }
      Venue: {
        payload: Prisma.$VenuePayload<ExtArgs>
        fields: Prisma.VenueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findFirst: {
            args: Prisma.VenueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findMany: {
            args: Prisma.VenueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          create: {
            args: Prisma.VenueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          createMany: {
            args: Prisma.VenueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          delete: {
            args: Prisma.VenueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          update: {
            args: Prisma.VenueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          deleteMany: {
            args: Prisma.VenueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VenueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          upsert: {
            args: Prisma.VenueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          aggregate: {
            args: Prisma.VenueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenue>
          }
          groupBy: {
            args: Prisma.VenueGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenueCountArgs<ExtArgs>
            result: $Utils.Optional<VenueCountAggregateOutputType> | number
          }
        }
      }
      BandMember: {
        payload: Prisma.$BandMemberPayload<ExtArgs>
        fields: Prisma.BandMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BandMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BandMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload>
          }
          findFirst: {
            args: Prisma.BandMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BandMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload>
          }
          findMany: {
            args: Prisma.BandMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload>[]
          }
          create: {
            args: Prisma.BandMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload>
          }
          createMany: {
            args: Prisma.BandMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BandMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload>[]
          }
          delete: {
            args: Prisma.BandMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload>
          }
          update: {
            args: Prisma.BandMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload>
          }
          deleteMany: {
            args: Prisma.BandMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BandMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BandMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload>[]
          }
          upsert: {
            args: Prisma.BandMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BandMemberPayload>
          }
          aggregate: {
            args: Prisma.BandMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBandMember>
          }
          groupBy: {
            args: Prisma.BandMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<BandMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.BandMemberCountArgs<ExtArgs>
            result: $Utils.Optional<BandMemberCountAggregateOutputType> | number
          }
        }
      }
      VenueStaffRole: {
        payload: Prisma.$VenueStaffRolePayload<ExtArgs>
        fields: Prisma.VenueStaffRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueStaffRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueStaffRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueStaffRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueStaffRolePayload>
          }
          findFirst: {
            args: Prisma.VenueStaffRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueStaffRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueStaffRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueStaffRolePayload>
          }
          findMany: {
            args: Prisma.VenueStaffRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueStaffRolePayload>[]
          }
          create: {
            args: Prisma.VenueStaffRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueStaffRolePayload>
          }
          createMany: {
            args: Prisma.VenueStaffRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenueStaffRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueStaffRolePayload>[]
          }
          delete: {
            args: Prisma.VenueStaffRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueStaffRolePayload>
          }
          update: {
            args: Prisma.VenueStaffRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueStaffRolePayload>
          }
          deleteMany: {
            args: Prisma.VenueStaffRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueStaffRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VenueStaffRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueStaffRolePayload>[]
          }
          upsert: {
            args: Prisma.VenueStaffRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueStaffRolePayload>
          }
          aggregate: {
            args: Prisma.VenueStaffRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenueStaffRole>
          }
          groupBy: {
            args: Prisma.VenueStaffRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueStaffRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenueStaffRoleCountArgs<ExtArgs>
            result: $Utils.Optional<VenueStaffRoleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    band?: BandOmit
    venue?: VenueOmit
    bandMember?: BandMemberOmit
    venueStaffRole?: VenueStaffRoleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bandMemberships: number
    venueStaffRoles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bandMemberships?: boolean | UserCountOutputTypeCountBandMembershipsArgs
    venueStaffRoles?: boolean | UserCountOutputTypeCountVenueStaffRolesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBandMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BandMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVenueStaffRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueStaffRoleWhereInput
  }


  /**
   * Count Type BandCountOutputType
   */

  export type BandCountOutputType = {
    members: number
  }

  export type BandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | BandCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * BandCountOutputType without action
   */
  export type BandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandCountOutputType
     */
    select?: BandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BandCountOutputType without action
   */
  export type BandCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BandMemberWhereInput
  }


  /**
   * Count Type VenueCountOutputType
   */

  export type VenueCountOutputType = {
    staff: number
  }

  export type VenueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | VenueCountOutputTypeCountStaffArgs
  }

  // Custom InputTypes
  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueCountOutputType
     */
    select?: VenueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueStaffRoleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    bandMemberships?: boolean | User$bandMembershipsArgs<ExtArgs>
    venueStaffRoles?: boolean | User$venueStaffRolesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bandMemberships?: boolean | User$bandMembershipsArgs<ExtArgs>
    venueStaffRoles?: boolean | User$venueStaffRolesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bandMemberships: Prisma.$BandMemberPayload<ExtArgs>[]
      venueStaffRoles: Prisma.$VenueStaffRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bandMemberships<T extends User$bandMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$bandMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    venueStaffRoles<T extends User$venueStaffRolesArgs<ExtArgs> = {}>(args?: Subset<T, User$venueStaffRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueStaffRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.bandMemberships
   */
  export type User$bandMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    where?: BandMemberWhereInput
    orderBy?: BandMemberOrderByWithRelationInput | BandMemberOrderByWithRelationInput[]
    cursor?: BandMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BandMemberScalarFieldEnum | BandMemberScalarFieldEnum[]
  }

  /**
   * User.venueStaffRoles
   */
  export type User$venueStaffRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueStaffRole
     */
    select?: VenueStaffRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueStaffRole
     */
    omit?: VenueStaffRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueStaffRoleInclude<ExtArgs> | null
    where?: VenueStaffRoleWhereInput
    orderBy?: VenueStaffRoleOrderByWithRelationInput | VenueStaffRoleOrderByWithRelationInput[]
    cursor?: VenueStaffRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VenueStaffRoleScalarFieldEnum | VenueStaffRoleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Band
   */

  export type AggregateBand = {
    _count: BandCountAggregateOutputType | null
    _avg: BandAvgAggregateOutputType | null
    _sum: BandSumAggregateOutputType | null
    _min: BandMinAggregateOutputType | null
    _max: BandMaxAggregateOutputType | null
  }

  export type BandAvgAggregateOutputType = {
    id: number | null
  }

  export type BandSumAggregateOutputType = {
    id: number | null
  }

  export type BandMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type BandMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type BandCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type BandAvgAggregateInputType = {
    id?: true
  }

  export type BandSumAggregateInputType = {
    id?: true
  }

  export type BandMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type BandMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type BandCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type BandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Band to aggregate.
     */
    where?: BandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bands to fetch.
     */
    orderBy?: BandOrderByWithRelationInput | BandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bands
    **/
    _count?: true | BandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BandMaxAggregateInputType
  }

  export type GetBandAggregateType<T extends BandAggregateArgs> = {
        [P in keyof T & keyof AggregateBand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBand[P]>
      : GetScalarType<T[P], AggregateBand[P]>
  }




  export type BandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BandWhereInput
    orderBy?: BandOrderByWithAggregationInput | BandOrderByWithAggregationInput[]
    by: BandScalarFieldEnum[] | BandScalarFieldEnum
    having?: BandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BandCountAggregateInputType | true
    _avg?: BandAvgAggregateInputType
    _sum?: BandSumAggregateInputType
    _min?: BandMinAggregateInputType
    _max?: BandMaxAggregateInputType
  }

  export type BandGroupByOutputType = {
    id: number
    name: string
    _count: BandCountAggregateOutputType | null
    _avg: BandAvgAggregateOutputType | null
    _sum: BandSumAggregateOutputType | null
    _min: BandMinAggregateOutputType | null
    _max: BandMaxAggregateOutputType | null
  }

  type GetBandGroupByPayload<T extends BandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BandGroupByOutputType[P]>
            : GetScalarType<T[P], BandGroupByOutputType[P]>
        }
      >
    >


  export type BandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    members?: boolean | Band$membersArgs<ExtArgs>
    _count?: boolean | BandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["band"]>

  export type BandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["band"]>

  export type BandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["band"]>

  export type BandSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type BandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["band"]>
  export type BandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Band$membersArgs<ExtArgs>
    _count?: boolean | BandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Band"
    objects: {
      members: Prisma.$BandMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["band"]>
    composites: {}
  }

  type BandGetPayload<S extends boolean | null | undefined | BandDefaultArgs> = $Result.GetResult<Prisma.$BandPayload, S>

  type BandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BandCountAggregateInputType | true
    }

  export interface BandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Band'], meta: { name: 'Band' } }
    /**
     * Find zero or one Band that matches the filter.
     * @param {BandFindUniqueArgs} args - Arguments to find a Band
     * @example
     * // Get one Band
     * const band = await prisma.band.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BandFindUniqueArgs>(args: SelectSubset<T, BandFindUniqueArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Band that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BandFindUniqueOrThrowArgs} args - Arguments to find a Band
     * @example
     * // Get one Band
     * const band = await prisma.band.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BandFindUniqueOrThrowArgs>(args: SelectSubset<T, BandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Band that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandFindFirstArgs} args - Arguments to find a Band
     * @example
     * // Get one Band
     * const band = await prisma.band.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BandFindFirstArgs>(args?: SelectSubset<T, BandFindFirstArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Band that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandFindFirstOrThrowArgs} args - Arguments to find a Band
     * @example
     * // Get one Band
     * const band = await prisma.band.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BandFindFirstOrThrowArgs>(args?: SelectSubset<T, BandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bands
     * const bands = await prisma.band.findMany()
     * 
     * // Get first 10 Bands
     * const bands = await prisma.band.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bandWithIdOnly = await prisma.band.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BandFindManyArgs>(args?: SelectSubset<T, BandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Band.
     * @param {BandCreateArgs} args - Arguments to create a Band.
     * @example
     * // Create one Band
     * const Band = await prisma.band.create({
     *   data: {
     *     // ... data to create a Band
     *   }
     * })
     * 
     */
    create<T extends BandCreateArgs>(args: SelectSubset<T, BandCreateArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bands.
     * @param {BandCreateManyArgs} args - Arguments to create many Bands.
     * @example
     * // Create many Bands
     * const band = await prisma.band.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BandCreateManyArgs>(args?: SelectSubset<T, BandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bands and returns the data saved in the database.
     * @param {BandCreateManyAndReturnArgs} args - Arguments to create many Bands.
     * @example
     * // Create many Bands
     * const band = await prisma.band.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bands and only return the `id`
     * const bandWithIdOnly = await prisma.band.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BandCreateManyAndReturnArgs>(args?: SelectSubset<T, BandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Band.
     * @param {BandDeleteArgs} args - Arguments to delete one Band.
     * @example
     * // Delete one Band
     * const Band = await prisma.band.delete({
     *   where: {
     *     // ... filter to delete one Band
     *   }
     * })
     * 
     */
    delete<T extends BandDeleteArgs>(args: SelectSubset<T, BandDeleteArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Band.
     * @param {BandUpdateArgs} args - Arguments to update one Band.
     * @example
     * // Update one Band
     * const band = await prisma.band.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BandUpdateArgs>(args: SelectSubset<T, BandUpdateArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bands.
     * @param {BandDeleteManyArgs} args - Arguments to filter Bands to delete.
     * @example
     * // Delete a few Bands
     * const { count } = await prisma.band.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BandDeleteManyArgs>(args?: SelectSubset<T, BandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bands
     * const band = await prisma.band.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BandUpdateManyArgs>(args: SelectSubset<T, BandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bands and returns the data updated in the database.
     * @param {BandUpdateManyAndReturnArgs} args - Arguments to update many Bands.
     * @example
     * // Update many Bands
     * const band = await prisma.band.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bands and only return the `id`
     * const bandWithIdOnly = await prisma.band.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BandUpdateManyAndReturnArgs>(args: SelectSubset<T, BandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Band.
     * @param {BandUpsertArgs} args - Arguments to update or create a Band.
     * @example
     * // Update or create a Band
     * const band = await prisma.band.upsert({
     *   create: {
     *     // ... data to create a Band
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Band we want to update
     *   }
     * })
     */
    upsert<T extends BandUpsertArgs>(args: SelectSubset<T, BandUpsertArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandCountArgs} args - Arguments to filter Bands to count.
     * @example
     * // Count the number of Bands
     * const count = await prisma.band.count({
     *   where: {
     *     // ... the filter for the Bands we want to count
     *   }
     * })
    **/
    count<T extends BandCountArgs>(
      args?: Subset<T, BandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Band.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BandAggregateArgs>(args: Subset<T, BandAggregateArgs>): Prisma.PrismaPromise<GetBandAggregateType<T>>

    /**
     * Group by Band.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BandGroupByArgs['orderBy'] }
        : { orderBy?: BandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Band model
   */
  readonly fields: BandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Band.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Band$membersArgs<ExtArgs> = {}>(args?: Subset<T, Band$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Band model
   */
  interface BandFieldRefs {
    readonly id: FieldRef<"Band", 'Int'>
    readonly name: FieldRef<"Band", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Band findUnique
   */
  export type BandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
    /**
     * Filter, which Band to fetch.
     */
    where: BandWhereUniqueInput
  }

  /**
   * Band findUniqueOrThrow
   */
  export type BandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
    /**
     * Filter, which Band to fetch.
     */
    where: BandWhereUniqueInput
  }

  /**
   * Band findFirst
   */
  export type BandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
    /**
     * Filter, which Band to fetch.
     */
    where?: BandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bands to fetch.
     */
    orderBy?: BandOrderByWithRelationInput | BandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bands.
     */
    cursor?: BandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bands.
     */
    distinct?: BandScalarFieldEnum | BandScalarFieldEnum[]
  }

  /**
   * Band findFirstOrThrow
   */
  export type BandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
    /**
     * Filter, which Band to fetch.
     */
    where?: BandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bands to fetch.
     */
    orderBy?: BandOrderByWithRelationInput | BandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bands.
     */
    cursor?: BandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bands.
     */
    distinct?: BandScalarFieldEnum | BandScalarFieldEnum[]
  }

  /**
   * Band findMany
   */
  export type BandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
    /**
     * Filter, which Bands to fetch.
     */
    where?: BandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bands to fetch.
     */
    orderBy?: BandOrderByWithRelationInput | BandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bands.
     */
    cursor?: BandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bands.
     */
    skip?: number
    distinct?: BandScalarFieldEnum | BandScalarFieldEnum[]
  }

  /**
   * Band create
   */
  export type BandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
    /**
     * The data needed to create a Band.
     */
    data: XOR<BandCreateInput, BandUncheckedCreateInput>
  }

  /**
   * Band createMany
   */
  export type BandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bands.
     */
    data: BandCreateManyInput | BandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Band createManyAndReturn
   */
  export type BandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * The data used to create many Bands.
     */
    data: BandCreateManyInput | BandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Band update
   */
  export type BandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
    /**
     * The data needed to update a Band.
     */
    data: XOR<BandUpdateInput, BandUncheckedUpdateInput>
    /**
     * Choose, which Band to update.
     */
    where: BandWhereUniqueInput
  }

  /**
   * Band updateMany
   */
  export type BandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bands.
     */
    data: XOR<BandUpdateManyMutationInput, BandUncheckedUpdateManyInput>
    /**
     * Filter which Bands to update
     */
    where?: BandWhereInput
    /**
     * Limit how many Bands to update.
     */
    limit?: number
  }

  /**
   * Band updateManyAndReturn
   */
  export type BandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * The data used to update Bands.
     */
    data: XOR<BandUpdateManyMutationInput, BandUncheckedUpdateManyInput>
    /**
     * Filter which Bands to update
     */
    where?: BandWhereInput
    /**
     * Limit how many Bands to update.
     */
    limit?: number
  }

  /**
   * Band upsert
   */
  export type BandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
    /**
     * The filter to search for the Band to update in case it exists.
     */
    where: BandWhereUniqueInput
    /**
     * In case the Band found by the `where` argument doesn't exist, create a new Band with this data.
     */
    create: XOR<BandCreateInput, BandUncheckedCreateInput>
    /**
     * In case the Band was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BandUpdateInput, BandUncheckedUpdateInput>
  }

  /**
   * Band delete
   */
  export type BandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
    /**
     * Filter which Band to delete.
     */
    where: BandWhereUniqueInput
  }

  /**
   * Band deleteMany
   */
  export type BandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bands to delete
     */
    where?: BandWhereInput
    /**
     * Limit how many Bands to delete.
     */
    limit?: number
  }

  /**
   * Band.members
   */
  export type Band$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    where?: BandMemberWhereInput
    orderBy?: BandMemberOrderByWithRelationInput | BandMemberOrderByWithRelationInput[]
    cursor?: BandMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BandMemberScalarFieldEnum | BandMemberScalarFieldEnum[]
  }

  /**
   * Band without action
   */
  export type BandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Band
     */
    select?: BandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Band
     */
    omit?: BandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandInclude<ExtArgs> | null
  }


  /**
   * Model Venue
   */

  export type AggregateVenue = {
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  export type VenueAvgAggregateOutputType = {
    id: number | null
  }

  export type VenueSumAggregateOutputType = {
    id: number | null
  }

  export type VenueMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    address2: string | null
    city: string | null
    state: string | null
    zip: string | null
    country: string | null
    phone: string | null
    email: string | null
  }

  export type VenueMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    address2: string | null
    city: string | null
    state: string | null
    zip: string | null
    country: string | null
    phone: string | null
    email: string | null
  }

  export type VenueCountAggregateOutputType = {
    id: number
    name: number
    address: number
    address2: number
    city: number
    state: number
    zip: number
    country: number
    phone: number
    email: number
    _all: number
  }


  export type VenueAvgAggregateInputType = {
    id?: true
  }

  export type VenueSumAggregateInputType = {
    id?: true
  }

  export type VenueMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    address2?: true
    city?: true
    state?: true
    zip?: true
    country?: true
    phone?: true
    email?: true
  }

  export type VenueMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    address2?: true
    city?: true
    state?: true
    zip?: true
    country?: true
    phone?: true
    email?: true
  }

  export type VenueCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    address2?: true
    city?: true
    state?: true
    zip?: true
    country?: true
    phone?: true
    email?: true
    _all?: true
  }

  export type VenueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venue to aggregate.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Venues
    **/
    _count?: true | VenueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueMaxAggregateInputType
  }

  export type GetVenueAggregateType<T extends VenueAggregateArgs> = {
        [P in keyof T & keyof AggregateVenue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenue[P]>
      : GetScalarType<T[P], AggregateVenue[P]>
  }




  export type VenueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueWhereInput
    orderBy?: VenueOrderByWithAggregationInput | VenueOrderByWithAggregationInput[]
    by: VenueScalarFieldEnum[] | VenueScalarFieldEnum
    having?: VenueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueCountAggregateInputType | true
    _avg?: VenueAvgAggregateInputType
    _sum?: VenueSumAggregateInputType
    _min?: VenueMinAggregateInputType
    _max?: VenueMaxAggregateInputType
  }

  export type VenueGroupByOutputType = {
    id: number
    name: string
    address: string
    address2: string | null
    city: string
    state: string
    zip: string
    country: string
    phone: string | null
    email: string
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  type GetVenueGroupByPayload<T extends VenueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueGroupByOutputType[P]>
            : GetScalarType<T[P], VenueGroupByOutputType[P]>
        }
      >
    >


  export type VenueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    address2?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    country?: boolean
    phone?: boolean
    email?: boolean
    staff?: boolean | Venue$staffArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    address2?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    country?: boolean
    phone?: boolean
    email?: boolean
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    address2?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    country?: boolean
    phone?: boolean
    email?: boolean
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    address2?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    country?: boolean
    phone?: boolean
    email?: boolean
  }

  export type VenueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "address2" | "city" | "state" | "zip" | "country" | "phone" | "email", ExtArgs["result"]["venue"]>
  export type VenueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | Venue$staffArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VenueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VenueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VenuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venue"
    objects: {
      staff: Prisma.$VenueStaffRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      address2: string | null
      city: string
      state: string
      zip: string
      country: string
      phone: string | null
      email: string
    }, ExtArgs["result"]["venue"]>
    composites: {}
  }

  type VenueGetPayload<S extends boolean | null | undefined | VenueDefaultArgs> = $Result.GetResult<Prisma.$VenuePayload, S>

  type VenueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenueCountAggregateInputType | true
    }

  export interface VenueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venue'], meta: { name: 'Venue' } }
    /**
     * Find zero or one Venue that matches the filter.
     * @param {VenueFindUniqueArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueFindUniqueArgs>(args: SelectSubset<T, VenueFindUniqueArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenueFindUniqueOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueFindFirstArgs>(args?: SelectSubset<T, VenueFindFirstArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Venues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Venues
     * const venues = await prisma.venue.findMany()
     * 
     * // Get first 10 Venues
     * const venues = await prisma.venue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venueWithIdOnly = await prisma.venue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenueFindManyArgs>(args?: SelectSubset<T, VenueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venue.
     * @param {VenueCreateArgs} args - Arguments to create a Venue.
     * @example
     * // Create one Venue
     * const Venue = await prisma.venue.create({
     *   data: {
     *     // ... data to create a Venue
     *   }
     * })
     * 
     */
    create<T extends VenueCreateArgs>(args: SelectSubset<T, VenueCreateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Venues.
     * @param {VenueCreateManyArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueCreateManyArgs>(args?: SelectSubset<T, VenueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Venues and returns the data saved in the database.
     * @param {VenueCreateManyAndReturnArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Venues and only return the `id`
     * const venueWithIdOnly = await prisma.venue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenueCreateManyAndReturnArgs>(args?: SelectSubset<T, VenueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venue.
     * @param {VenueDeleteArgs} args - Arguments to delete one Venue.
     * @example
     * // Delete one Venue
     * const Venue = await prisma.venue.delete({
     *   where: {
     *     // ... filter to delete one Venue
     *   }
     * })
     * 
     */
    delete<T extends VenueDeleteArgs>(args: SelectSubset<T, VenueDeleteArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venue.
     * @param {VenueUpdateArgs} args - Arguments to update one Venue.
     * @example
     * // Update one Venue
     * const venue = await prisma.venue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueUpdateArgs>(args: SelectSubset<T, VenueUpdateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Venues.
     * @param {VenueDeleteManyArgs} args - Arguments to filter Venues to delete.
     * @example
     * // Delete a few Venues
     * const { count } = await prisma.venue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueDeleteManyArgs>(args?: SelectSubset<T, VenueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueUpdateManyArgs>(args: SelectSubset<T, VenueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues and returns the data updated in the database.
     * @param {VenueUpdateManyAndReturnArgs} args - Arguments to update many Venues.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Venues and only return the `id`
     * const venueWithIdOnly = await prisma.venue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VenueUpdateManyAndReturnArgs>(args: SelectSubset<T, VenueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venue.
     * @param {VenueUpsertArgs} args - Arguments to update or create a Venue.
     * @example
     * // Update or create a Venue
     * const venue = await prisma.venue.upsert({
     *   create: {
     *     // ... data to create a Venue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venue we want to update
     *   }
     * })
     */
    upsert<T extends VenueUpsertArgs>(args: SelectSubset<T, VenueUpsertArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueCountArgs} args - Arguments to filter Venues to count.
     * @example
     * // Count the number of Venues
     * const count = await prisma.venue.count({
     *   where: {
     *     // ... the filter for the Venues we want to count
     *   }
     * })
    **/
    count<T extends VenueCountArgs>(
      args?: Subset<T, VenueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VenueAggregateArgs>(args: Subset<T, VenueAggregateArgs>): Prisma.PrismaPromise<GetVenueAggregateType<T>>

    /**
     * Group by Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VenueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueGroupByArgs['orderBy'] }
        : { orderBy?: VenueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VenueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venue model
   */
  readonly fields: VenueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends Venue$staffArgs<ExtArgs> = {}>(args?: Subset<T, Venue$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueStaffRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Venue model
   */
  interface VenueFieldRefs {
    readonly id: FieldRef<"Venue", 'Int'>
    readonly name: FieldRef<"Venue", 'String'>
    readonly address: FieldRef<"Venue", 'String'>
    readonly address2: FieldRef<"Venue", 'String'>
    readonly city: FieldRef<"Venue", 'String'>
    readonly state: FieldRef<"Venue", 'String'>
    readonly zip: FieldRef<"Venue", 'String'>
    readonly country: FieldRef<"Venue", 'String'>
    readonly phone: FieldRef<"Venue", 'String'>
    readonly email: FieldRef<"Venue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Venue findUnique
   */
  export type VenueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findUniqueOrThrow
   */
  export type VenueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findFirst
   */
  export type VenueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findFirstOrThrow
   */
  export type VenueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findMany
   */
  export type VenueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venues to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue create
   */
  export type VenueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to create a Venue.
     */
    data: XOR<VenueCreateInput, VenueUncheckedCreateInput>
  }

  /**
   * Venue createMany
   */
  export type VenueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venue createManyAndReturn
   */
  export type VenueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venue update
   */
  export type VenueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to update a Venue.
     */
    data: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
    /**
     * Choose, which Venue to update.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue updateMany
   */
  export type VenueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
  }

  /**
   * Venue updateManyAndReturn
   */
  export type VenueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
  }

  /**
   * Venue upsert
   */
  export type VenueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The filter to search for the Venue to update in case it exists.
     */
    where: VenueWhereUniqueInput
    /**
     * In case the Venue found by the `where` argument doesn't exist, create a new Venue with this data.
     */
    create: XOR<VenueCreateInput, VenueUncheckedCreateInput>
    /**
     * In case the Venue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
  }

  /**
   * Venue delete
   */
  export type VenueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter which Venue to delete.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue deleteMany
   */
  export type VenueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venues to delete
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to delete.
     */
    limit?: number
  }

  /**
   * Venue.staff
   */
  export type Venue$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueStaffRole
     */
    select?: VenueStaffRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueStaffRole
     */
    omit?: VenueStaffRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueStaffRoleInclude<ExtArgs> | null
    where?: VenueStaffRoleWhereInput
    orderBy?: VenueStaffRoleOrderByWithRelationInput | VenueStaffRoleOrderByWithRelationInput[]
    cursor?: VenueStaffRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VenueStaffRoleScalarFieldEnum | VenueStaffRoleScalarFieldEnum[]
  }

  /**
   * Venue without action
   */
  export type VenueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
  }


  /**
   * Model BandMember
   */

  export type AggregateBandMember = {
    _count: BandMemberCountAggregateOutputType | null
    _avg: BandMemberAvgAggregateOutputType | null
    _sum: BandMemberSumAggregateOutputType | null
    _min: BandMemberMinAggregateOutputType | null
    _max: BandMemberMaxAggregateOutputType | null
  }

  export type BandMemberAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    bandId: number | null
  }

  export type BandMemberSumAggregateOutputType = {
    id: number | null
    userId: number | null
    bandId: number | null
  }

  export type BandMemberMinAggregateOutputType = {
    id: number | null
    userId: number | null
    bandId: number | null
  }

  export type BandMemberMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    bandId: number | null
  }

  export type BandMemberCountAggregateOutputType = {
    id: number
    userId: number
    bandId: number
    _all: number
  }


  export type BandMemberAvgAggregateInputType = {
    id?: true
    userId?: true
    bandId?: true
  }

  export type BandMemberSumAggregateInputType = {
    id?: true
    userId?: true
    bandId?: true
  }

  export type BandMemberMinAggregateInputType = {
    id?: true
    userId?: true
    bandId?: true
  }

  export type BandMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    bandId?: true
  }

  export type BandMemberCountAggregateInputType = {
    id?: true
    userId?: true
    bandId?: true
    _all?: true
  }

  export type BandMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BandMember to aggregate.
     */
    where?: BandMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BandMembers to fetch.
     */
    orderBy?: BandMemberOrderByWithRelationInput | BandMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BandMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BandMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BandMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BandMembers
    **/
    _count?: true | BandMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BandMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BandMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BandMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BandMemberMaxAggregateInputType
  }

  export type GetBandMemberAggregateType<T extends BandMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateBandMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBandMember[P]>
      : GetScalarType<T[P], AggregateBandMember[P]>
  }




  export type BandMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BandMemberWhereInput
    orderBy?: BandMemberOrderByWithAggregationInput | BandMemberOrderByWithAggregationInput[]
    by: BandMemberScalarFieldEnum[] | BandMemberScalarFieldEnum
    having?: BandMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BandMemberCountAggregateInputType | true
    _avg?: BandMemberAvgAggregateInputType
    _sum?: BandMemberSumAggregateInputType
    _min?: BandMemberMinAggregateInputType
    _max?: BandMemberMaxAggregateInputType
  }

  export type BandMemberGroupByOutputType = {
    id: number
    userId: number
    bandId: number
    _count: BandMemberCountAggregateOutputType | null
    _avg: BandMemberAvgAggregateOutputType | null
    _sum: BandMemberSumAggregateOutputType | null
    _min: BandMemberMinAggregateOutputType | null
    _max: BandMemberMaxAggregateOutputType | null
  }

  type GetBandMemberGroupByPayload<T extends BandMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BandMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BandMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BandMemberGroupByOutputType[P]>
            : GetScalarType<T[P], BandMemberGroupByOutputType[P]>
        }
      >
    >


  export type BandMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bandId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    band?: boolean | BandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bandMember"]>

  export type BandMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bandId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    band?: boolean | BandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bandMember"]>

  export type BandMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bandId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    band?: boolean | BandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bandMember"]>

  export type BandMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    bandId?: boolean
  }

  export type BandMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bandId", ExtArgs["result"]["bandMember"]>
  export type BandMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    band?: boolean | BandDefaultArgs<ExtArgs>
  }
  export type BandMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    band?: boolean | BandDefaultArgs<ExtArgs>
  }
  export type BandMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    band?: boolean | BandDefaultArgs<ExtArgs>
  }

  export type $BandMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BandMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      band: Prisma.$BandPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      bandId: number
    }, ExtArgs["result"]["bandMember"]>
    composites: {}
  }

  type BandMemberGetPayload<S extends boolean | null | undefined | BandMemberDefaultArgs> = $Result.GetResult<Prisma.$BandMemberPayload, S>

  type BandMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BandMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BandMemberCountAggregateInputType | true
    }

  export interface BandMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BandMember'], meta: { name: 'BandMember' } }
    /**
     * Find zero or one BandMember that matches the filter.
     * @param {BandMemberFindUniqueArgs} args - Arguments to find a BandMember
     * @example
     * // Get one BandMember
     * const bandMember = await prisma.bandMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BandMemberFindUniqueArgs>(args: SelectSubset<T, BandMemberFindUniqueArgs<ExtArgs>>): Prisma__BandMemberClient<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BandMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BandMemberFindUniqueOrThrowArgs} args - Arguments to find a BandMember
     * @example
     * // Get one BandMember
     * const bandMember = await prisma.bandMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BandMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, BandMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BandMemberClient<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BandMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandMemberFindFirstArgs} args - Arguments to find a BandMember
     * @example
     * // Get one BandMember
     * const bandMember = await prisma.bandMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BandMemberFindFirstArgs>(args?: SelectSubset<T, BandMemberFindFirstArgs<ExtArgs>>): Prisma__BandMemberClient<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BandMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandMemberFindFirstOrThrowArgs} args - Arguments to find a BandMember
     * @example
     * // Get one BandMember
     * const bandMember = await prisma.bandMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BandMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, BandMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__BandMemberClient<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BandMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BandMembers
     * const bandMembers = await prisma.bandMember.findMany()
     * 
     * // Get first 10 BandMembers
     * const bandMembers = await prisma.bandMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bandMemberWithIdOnly = await prisma.bandMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BandMemberFindManyArgs>(args?: SelectSubset<T, BandMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BandMember.
     * @param {BandMemberCreateArgs} args - Arguments to create a BandMember.
     * @example
     * // Create one BandMember
     * const BandMember = await prisma.bandMember.create({
     *   data: {
     *     // ... data to create a BandMember
     *   }
     * })
     * 
     */
    create<T extends BandMemberCreateArgs>(args: SelectSubset<T, BandMemberCreateArgs<ExtArgs>>): Prisma__BandMemberClient<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BandMembers.
     * @param {BandMemberCreateManyArgs} args - Arguments to create many BandMembers.
     * @example
     * // Create many BandMembers
     * const bandMember = await prisma.bandMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BandMemberCreateManyArgs>(args?: SelectSubset<T, BandMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BandMembers and returns the data saved in the database.
     * @param {BandMemberCreateManyAndReturnArgs} args - Arguments to create many BandMembers.
     * @example
     * // Create many BandMembers
     * const bandMember = await prisma.bandMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BandMembers and only return the `id`
     * const bandMemberWithIdOnly = await prisma.bandMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BandMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, BandMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BandMember.
     * @param {BandMemberDeleteArgs} args - Arguments to delete one BandMember.
     * @example
     * // Delete one BandMember
     * const BandMember = await prisma.bandMember.delete({
     *   where: {
     *     // ... filter to delete one BandMember
     *   }
     * })
     * 
     */
    delete<T extends BandMemberDeleteArgs>(args: SelectSubset<T, BandMemberDeleteArgs<ExtArgs>>): Prisma__BandMemberClient<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BandMember.
     * @param {BandMemberUpdateArgs} args - Arguments to update one BandMember.
     * @example
     * // Update one BandMember
     * const bandMember = await prisma.bandMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BandMemberUpdateArgs>(args: SelectSubset<T, BandMemberUpdateArgs<ExtArgs>>): Prisma__BandMemberClient<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BandMembers.
     * @param {BandMemberDeleteManyArgs} args - Arguments to filter BandMembers to delete.
     * @example
     * // Delete a few BandMembers
     * const { count } = await prisma.bandMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BandMemberDeleteManyArgs>(args?: SelectSubset<T, BandMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BandMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BandMembers
     * const bandMember = await prisma.bandMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BandMemberUpdateManyArgs>(args: SelectSubset<T, BandMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BandMembers and returns the data updated in the database.
     * @param {BandMemberUpdateManyAndReturnArgs} args - Arguments to update many BandMembers.
     * @example
     * // Update many BandMembers
     * const bandMember = await prisma.bandMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BandMembers and only return the `id`
     * const bandMemberWithIdOnly = await prisma.bandMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BandMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, BandMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BandMember.
     * @param {BandMemberUpsertArgs} args - Arguments to update or create a BandMember.
     * @example
     * // Update or create a BandMember
     * const bandMember = await prisma.bandMember.upsert({
     *   create: {
     *     // ... data to create a BandMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BandMember we want to update
     *   }
     * })
     */
    upsert<T extends BandMemberUpsertArgs>(args: SelectSubset<T, BandMemberUpsertArgs<ExtArgs>>): Prisma__BandMemberClient<$Result.GetResult<Prisma.$BandMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BandMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandMemberCountArgs} args - Arguments to filter BandMembers to count.
     * @example
     * // Count the number of BandMembers
     * const count = await prisma.bandMember.count({
     *   where: {
     *     // ... the filter for the BandMembers we want to count
     *   }
     * })
    **/
    count<T extends BandMemberCountArgs>(
      args?: Subset<T, BandMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BandMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BandMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BandMemberAggregateArgs>(args: Subset<T, BandMemberAggregateArgs>): Prisma.PrismaPromise<GetBandMemberAggregateType<T>>

    /**
     * Group by BandMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BandMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BandMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BandMemberGroupByArgs['orderBy'] }
        : { orderBy?: BandMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BandMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBandMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BandMember model
   */
  readonly fields: BandMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BandMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BandMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    band<T extends BandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BandDefaultArgs<ExtArgs>>): Prisma__BandClient<$Result.GetResult<Prisma.$BandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BandMember model
   */
  interface BandMemberFieldRefs {
    readonly id: FieldRef<"BandMember", 'Int'>
    readonly userId: FieldRef<"BandMember", 'Int'>
    readonly bandId: FieldRef<"BandMember", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BandMember findUnique
   */
  export type BandMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    /**
     * Filter, which BandMember to fetch.
     */
    where: BandMemberWhereUniqueInput
  }

  /**
   * BandMember findUniqueOrThrow
   */
  export type BandMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    /**
     * Filter, which BandMember to fetch.
     */
    where: BandMemberWhereUniqueInput
  }

  /**
   * BandMember findFirst
   */
  export type BandMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    /**
     * Filter, which BandMember to fetch.
     */
    where?: BandMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BandMembers to fetch.
     */
    orderBy?: BandMemberOrderByWithRelationInput | BandMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BandMembers.
     */
    cursor?: BandMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BandMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BandMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BandMembers.
     */
    distinct?: BandMemberScalarFieldEnum | BandMemberScalarFieldEnum[]
  }

  /**
   * BandMember findFirstOrThrow
   */
  export type BandMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    /**
     * Filter, which BandMember to fetch.
     */
    where?: BandMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BandMembers to fetch.
     */
    orderBy?: BandMemberOrderByWithRelationInput | BandMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BandMembers.
     */
    cursor?: BandMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BandMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BandMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BandMembers.
     */
    distinct?: BandMemberScalarFieldEnum | BandMemberScalarFieldEnum[]
  }

  /**
   * BandMember findMany
   */
  export type BandMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    /**
     * Filter, which BandMembers to fetch.
     */
    where?: BandMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BandMembers to fetch.
     */
    orderBy?: BandMemberOrderByWithRelationInput | BandMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BandMembers.
     */
    cursor?: BandMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BandMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BandMembers.
     */
    skip?: number
    distinct?: BandMemberScalarFieldEnum | BandMemberScalarFieldEnum[]
  }

  /**
   * BandMember create
   */
  export type BandMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a BandMember.
     */
    data: XOR<BandMemberCreateInput, BandMemberUncheckedCreateInput>
  }

  /**
   * BandMember createMany
   */
  export type BandMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BandMembers.
     */
    data: BandMemberCreateManyInput | BandMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BandMember createManyAndReturn
   */
  export type BandMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * The data used to create many BandMembers.
     */
    data: BandMemberCreateManyInput | BandMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BandMember update
   */
  export type BandMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a BandMember.
     */
    data: XOR<BandMemberUpdateInput, BandMemberUncheckedUpdateInput>
    /**
     * Choose, which BandMember to update.
     */
    where: BandMemberWhereUniqueInput
  }

  /**
   * BandMember updateMany
   */
  export type BandMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BandMembers.
     */
    data: XOR<BandMemberUpdateManyMutationInput, BandMemberUncheckedUpdateManyInput>
    /**
     * Filter which BandMembers to update
     */
    where?: BandMemberWhereInput
    /**
     * Limit how many BandMembers to update.
     */
    limit?: number
  }

  /**
   * BandMember updateManyAndReturn
   */
  export type BandMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * The data used to update BandMembers.
     */
    data: XOR<BandMemberUpdateManyMutationInput, BandMemberUncheckedUpdateManyInput>
    /**
     * Filter which BandMembers to update
     */
    where?: BandMemberWhereInput
    /**
     * Limit how many BandMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BandMember upsert
   */
  export type BandMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the BandMember to update in case it exists.
     */
    where: BandMemberWhereUniqueInput
    /**
     * In case the BandMember found by the `where` argument doesn't exist, create a new BandMember with this data.
     */
    create: XOR<BandMemberCreateInput, BandMemberUncheckedCreateInput>
    /**
     * In case the BandMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BandMemberUpdateInput, BandMemberUncheckedUpdateInput>
  }

  /**
   * BandMember delete
   */
  export type BandMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
    /**
     * Filter which BandMember to delete.
     */
    where: BandMemberWhereUniqueInput
  }

  /**
   * BandMember deleteMany
   */
  export type BandMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BandMembers to delete
     */
    where?: BandMemberWhereInput
    /**
     * Limit how many BandMembers to delete.
     */
    limit?: number
  }

  /**
   * BandMember without action
   */
  export type BandMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BandMember
     */
    select?: BandMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BandMember
     */
    omit?: BandMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BandMemberInclude<ExtArgs> | null
  }


  /**
   * Model VenueStaffRole
   */

  export type AggregateVenueStaffRole = {
    _count: VenueStaffRoleCountAggregateOutputType | null
    _avg: VenueStaffRoleAvgAggregateOutputType | null
    _sum: VenueStaffRoleSumAggregateOutputType | null
    _min: VenueStaffRoleMinAggregateOutputType | null
    _max: VenueStaffRoleMaxAggregateOutputType | null
  }

  export type VenueStaffRoleAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    venueId: number | null
  }

  export type VenueStaffRoleSumAggregateOutputType = {
    id: number | null
    userId: number | null
    venueId: number | null
  }

  export type VenueStaffRoleMinAggregateOutputType = {
    id: number | null
    userId: number | null
    venueId: number | null
    role: string | null
  }

  export type VenueStaffRoleMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    venueId: number | null
    role: string | null
  }

  export type VenueStaffRoleCountAggregateOutputType = {
    id: number
    userId: number
    venueId: number
    role: number
    _all: number
  }


  export type VenueStaffRoleAvgAggregateInputType = {
    id?: true
    userId?: true
    venueId?: true
  }

  export type VenueStaffRoleSumAggregateInputType = {
    id?: true
    userId?: true
    venueId?: true
  }

  export type VenueStaffRoleMinAggregateInputType = {
    id?: true
    userId?: true
    venueId?: true
    role?: true
  }

  export type VenueStaffRoleMaxAggregateInputType = {
    id?: true
    userId?: true
    venueId?: true
    role?: true
  }

  export type VenueStaffRoleCountAggregateInputType = {
    id?: true
    userId?: true
    venueId?: true
    role?: true
    _all?: true
  }

  export type VenueStaffRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VenueStaffRole to aggregate.
     */
    where?: VenueStaffRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueStaffRoles to fetch.
     */
    orderBy?: VenueStaffRoleOrderByWithRelationInput | VenueStaffRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueStaffRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueStaffRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueStaffRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VenueStaffRoles
    **/
    _count?: true | VenueStaffRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenueStaffRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenueStaffRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueStaffRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueStaffRoleMaxAggregateInputType
  }

  export type GetVenueStaffRoleAggregateType<T extends VenueStaffRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateVenueStaffRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenueStaffRole[P]>
      : GetScalarType<T[P], AggregateVenueStaffRole[P]>
  }




  export type VenueStaffRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueStaffRoleWhereInput
    orderBy?: VenueStaffRoleOrderByWithAggregationInput | VenueStaffRoleOrderByWithAggregationInput[]
    by: VenueStaffRoleScalarFieldEnum[] | VenueStaffRoleScalarFieldEnum
    having?: VenueStaffRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueStaffRoleCountAggregateInputType | true
    _avg?: VenueStaffRoleAvgAggregateInputType
    _sum?: VenueStaffRoleSumAggregateInputType
    _min?: VenueStaffRoleMinAggregateInputType
    _max?: VenueStaffRoleMaxAggregateInputType
  }

  export type VenueStaffRoleGroupByOutputType = {
    id: number
    userId: number
    venueId: number
    role: string
    _count: VenueStaffRoleCountAggregateOutputType | null
    _avg: VenueStaffRoleAvgAggregateOutputType | null
    _sum: VenueStaffRoleSumAggregateOutputType | null
    _min: VenueStaffRoleMinAggregateOutputType | null
    _max: VenueStaffRoleMaxAggregateOutputType | null
  }

  type GetVenueStaffRoleGroupByPayload<T extends VenueStaffRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueStaffRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueStaffRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueStaffRoleGroupByOutputType[P]>
            : GetScalarType<T[P], VenueStaffRoleGroupByOutputType[P]>
        }
      >
    >


  export type VenueStaffRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    venueId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venueStaffRole"]>

  export type VenueStaffRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    venueId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venueStaffRole"]>

  export type VenueStaffRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    venueId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venueStaffRole"]>

  export type VenueStaffRoleSelectScalar = {
    id?: boolean
    userId?: boolean
    venueId?: boolean
    role?: boolean
  }

  export type VenueStaffRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "venueId" | "role", ExtArgs["result"]["venueStaffRole"]>
  export type VenueStaffRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type VenueStaffRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type VenueStaffRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $VenueStaffRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VenueStaffRole"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      venue: Prisma.$VenuePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      venueId: number
      role: string
    }, ExtArgs["result"]["venueStaffRole"]>
    composites: {}
  }

  type VenueStaffRoleGetPayload<S extends boolean | null | undefined | VenueStaffRoleDefaultArgs> = $Result.GetResult<Prisma.$VenueStaffRolePayload, S>

  type VenueStaffRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenueStaffRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenueStaffRoleCountAggregateInputType | true
    }

  export interface VenueStaffRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VenueStaffRole'], meta: { name: 'VenueStaffRole' } }
    /**
     * Find zero or one VenueStaffRole that matches the filter.
     * @param {VenueStaffRoleFindUniqueArgs} args - Arguments to find a VenueStaffRole
     * @example
     * // Get one VenueStaffRole
     * const venueStaffRole = await prisma.venueStaffRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueStaffRoleFindUniqueArgs>(args: SelectSubset<T, VenueStaffRoleFindUniqueArgs<ExtArgs>>): Prisma__VenueStaffRoleClient<$Result.GetResult<Prisma.$VenueStaffRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VenueStaffRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenueStaffRoleFindUniqueOrThrowArgs} args - Arguments to find a VenueStaffRole
     * @example
     * // Get one VenueStaffRole
     * const venueStaffRole = await prisma.venueStaffRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueStaffRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueStaffRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueStaffRoleClient<$Result.GetResult<Prisma.$VenueStaffRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VenueStaffRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueStaffRoleFindFirstArgs} args - Arguments to find a VenueStaffRole
     * @example
     * // Get one VenueStaffRole
     * const venueStaffRole = await prisma.venueStaffRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueStaffRoleFindFirstArgs>(args?: SelectSubset<T, VenueStaffRoleFindFirstArgs<ExtArgs>>): Prisma__VenueStaffRoleClient<$Result.GetResult<Prisma.$VenueStaffRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VenueStaffRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueStaffRoleFindFirstOrThrowArgs} args - Arguments to find a VenueStaffRole
     * @example
     * // Get one VenueStaffRole
     * const venueStaffRole = await prisma.venueStaffRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueStaffRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueStaffRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueStaffRoleClient<$Result.GetResult<Prisma.$VenueStaffRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VenueStaffRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueStaffRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VenueStaffRoles
     * const venueStaffRoles = await prisma.venueStaffRole.findMany()
     * 
     * // Get first 10 VenueStaffRoles
     * const venueStaffRoles = await prisma.venueStaffRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venueStaffRoleWithIdOnly = await prisma.venueStaffRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenueStaffRoleFindManyArgs>(args?: SelectSubset<T, VenueStaffRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueStaffRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VenueStaffRole.
     * @param {VenueStaffRoleCreateArgs} args - Arguments to create a VenueStaffRole.
     * @example
     * // Create one VenueStaffRole
     * const VenueStaffRole = await prisma.venueStaffRole.create({
     *   data: {
     *     // ... data to create a VenueStaffRole
     *   }
     * })
     * 
     */
    create<T extends VenueStaffRoleCreateArgs>(args: SelectSubset<T, VenueStaffRoleCreateArgs<ExtArgs>>): Prisma__VenueStaffRoleClient<$Result.GetResult<Prisma.$VenueStaffRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VenueStaffRoles.
     * @param {VenueStaffRoleCreateManyArgs} args - Arguments to create many VenueStaffRoles.
     * @example
     * // Create many VenueStaffRoles
     * const venueStaffRole = await prisma.venueStaffRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueStaffRoleCreateManyArgs>(args?: SelectSubset<T, VenueStaffRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VenueStaffRoles and returns the data saved in the database.
     * @param {VenueStaffRoleCreateManyAndReturnArgs} args - Arguments to create many VenueStaffRoles.
     * @example
     * // Create many VenueStaffRoles
     * const venueStaffRole = await prisma.venueStaffRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VenueStaffRoles and only return the `id`
     * const venueStaffRoleWithIdOnly = await prisma.venueStaffRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenueStaffRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, VenueStaffRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueStaffRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VenueStaffRole.
     * @param {VenueStaffRoleDeleteArgs} args - Arguments to delete one VenueStaffRole.
     * @example
     * // Delete one VenueStaffRole
     * const VenueStaffRole = await prisma.venueStaffRole.delete({
     *   where: {
     *     // ... filter to delete one VenueStaffRole
     *   }
     * })
     * 
     */
    delete<T extends VenueStaffRoleDeleteArgs>(args: SelectSubset<T, VenueStaffRoleDeleteArgs<ExtArgs>>): Prisma__VenueStaffRoleClient<$Result.GetResult<Prisma.$VenueStaffRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VenueStaffRole.
     * @param {VenueStaffRoleUpdateArgs} args - Arguments to update one VenueStaffRole.
     * @example
     * // Update one VenueStaffRole
     * const venueStaffRole = await prisma.venueStaffRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueStaffRoleUpdateArgs>(args: SelectSubset<T, VenueStaffRoleUpdateArgs<ExtArgs>>): Prisma__VenueStaffRoleClient<$Result.GetResult<Prisma.$VenueStaffRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VenueStaffRoles.
     * @param {VenueStaffRoleDeleteManyArgs} args - Arguments to filter VenueStaffRoles to delete.
     * @example
     * // Delete a few VenueStaffRoles
     * const { count } = await prisma.venueStaffRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueStaffRoleDeleteManyArgs>(args?: SelectSubset<T, VenueStaffRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VenueStaffRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueStaffRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VenueStaffRoles
     * const venueStaffRole = await prisma.venueStaffRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueStaffRoleUpdateManyArgs>(args: SelectSubset<T, VenueStaffRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VenueStaffRoles and returns the data updated in the database.
     * @param {VenueStaffRoleUpdateManyAndReturnArgs} args - Arguments to update many VenueStaffRoles.
     * @example
     * // Update many VenueStaffRoles
     * const venueStaffRole = await prisma.venueStaffRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VenueStaffRoles and only return the `id`
     * const venueStaffRoleWithIdOnly = await prisma.venueStaffRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VenueStaffRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, VenueStaffRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueStaffRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VenueStaffRole.
     * @param {VenueStaffRoleUpsertArgs} args - Arguments to update or create a VenueStaffRole.
     * @example
     * // Update or create a VenueStaffRole
     * const venueStaffRole = await prisma.venueStaffRole.upsert({
     *   create: {
     *     // ... data to create a VenueStaffRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VenueStaffRole we want to update
     *   }
     * })
     */
    upsert<T extends VenueStaffRoleUpsertArgs>(args: SelectSubset<T, VenueStaffRoleUpsertArgs<ExtArgs>>): Prisma__VenueStaffRoleClient<$Result.GetResult<Prisma.$VenueStaffRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VenueStaffRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueStaffRoleCountArgs} args - Arguments to filter VenueStaffRoles to count.
     * @example
     * // Count the number of VenueStaffRoles
     * const count = await prisma.venueStaffRole.count({
     *   where: {
     *     // ... the filter for the VenueStaffRoles we want to count
     *   }
     * })
    **/
    count<T extends VenueStaffRoleCountArgs>(
      args?: Subset<T, VenueStaffRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueStaffRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VenueStaffRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueStaffRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VenueStaffRoleAggregateArgs>(args: Subset<T, VenueStaffRoleAggregateArgs>): Prisma.PrismaPromise<GetVenueStaffRoleAggregateType<T>>

    /**
     * Group by VenueStaffRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueStaffRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VenueStaffRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueStaffRoleGroupByArgs['orderBy'] }
        : { orderBy?: VenueStaffRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VenueStaffRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueStaffRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VenueStaffRole model
   */
  readonly fields: VenueStaffRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VenueStaffRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueStaffRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VenueStaffRole model
   */
  interface VenueStaffRoleFieldRefs {
    readonly id: FieldRef<"VenueStaffRole", 'Int'>
    readonly userId: FieldRef<"VenueStaffRole", 'Int'>
    readonly venueId: FieldRef<"VenueStaffRole", 'Int'>
    readonly role: FieldRef<"VenueStaffRole", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VenueStaffRole findUnique
   */
  export type VenueStaffRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueStaffRole
     */
    select?: VenueStaffRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueStaffRole
     */
    omit?: VenueStaffRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueStaffRoleInclude<ExtArgs> | null
    /**
     * Filter, which VenueStaffRole to fetch.
     */
    where: VenueStaffRoleWhereUniqueInput
  }

  /**
   * VenueStaffRole findUniqueOrThrow
   */
  export type VenueStaffRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueStaffRole
     */
    select?: VenueStaffRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueStaffRole
     */
    omit?: VenueStaffRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueStaffRoleInclude<ExtArgs> | null
    /**
     * Filter, which VenueStaffRole to fetch.
     */
    where: VenueStaffRoleWhereUniqueInput
  }

  /**
   * VenueStaffRole findFirst
   */
  export type VenueStaffRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueStaffRole
     */
    select?: VenueStaffRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueStaffRole
     */
    omit?: VenueStaffRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueStaffRoleInclude<ExtArgs> | null
    /**
     * Filter, which VenueStaffRole to fetch.
     */
    where?: VenueStaffRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueStaffRoles to fetch.
     */
    orderBy?: VenueStaffRoleOrderByWithRelationInput | VenueStaffRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VenueStaffRoles.
     */
    cursor?: VenueStaffRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueStaffRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueStaffRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenueStaffRoles.
     */
    distinct?: VenueStaffRoleScalarFieldEnum | VenueStaffRoleScalarFieldEnum[]
  }

  /**
   * VenueStaffRole findFirstOrThrow
   */
  export type VenueStaffRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueStaffRole
     */
    select?: VenueStaffRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueStaffRole
     */
    omit?: VenueStaffRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueStaffRoleInclude<ExtArgs> | null
    /**
     * Filter, which VenueStaffRole to fetch.
     */
    where?: VenueStaffRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueStaffRoles to fetch.
     */
    orderBy?: VenueStaffRoleOrderByWithRelationInput | VenueStaffRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VenueStaffRoles.
     */
    cursor?: VenueStaffRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueStaffRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueStaffRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenueStaffRoles.
     */
    distinct?: VenueStaffRoleScalarFieldEnum | VenueStaffRoleScalarFieldEnum[]
  }

  /**
   * VenueStaffRole findMany
   */
  export type VenueStaffRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueStaffRole
     */
    select?: VenueStaffRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueStaffRole
     */
    omit?: VenueStaffRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueStaffRoleInclude<ExtArgs> | null
    /**
     * Filter, which VenueStaffRoles to fetch.
     */
    where?: VenueStaffRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueStaffRoles to fetch.
     */
    orderBy?: VenueStaffRoleOrderByWithRelationInput | VenueStaffRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VenueStaffRoles.
     */
    cursor?: VenueStaffRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueStaffRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueStaffRoles.
     */
    skip?: number
    distinct?: VenueStaffRoleScalarFieldEnum | VenueStaffRoleScalarFieldEnum[]
  }

  /**
   * VenueStaffRole create
   */
  export type VenueStaffRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueStaffRole
     */
    select?: VenueStaffRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueStaffRole
     */
    omit?: VenueStaffRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueStaffRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a VenueStaffRole.
     */
    data: XOR<VenueStaffRoleCreateInput, VenueStaffRoleUncheckedCreateInput>
  }

  /**
   * VenueStaffRole createMany
   */
  export type VenueStaffRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VenueStaffRoles.
     */
    data: VenueStaffRoleCreateManyInput | VenueStaffRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VenueStaffRole createManyAndReturn
   */
  export type VenueStaffRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueStaffRole
     */
    select?: VenueStaffRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VenueStaffRole
     */
    omit?: VenueStaffRoleOmit<ExtArgs> | null
    /**
     * The data used to create many VenueStaffRoles.
     */
    data: VenueStaffRoleCreateManyInput | VenueStaffRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueStaffRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VenueStaffRole update
   */
  export type VenueStaffRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueStaffRole
     */
    select?: VenueStaffRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueStaffRole
     */
    omit?: VenueStaffRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueStaffRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a VenueStaffRole.
     */
    data: XOR<VenueStaffRoleUpdateInput, VenueStaffRoleUncheckedUpdateInput>
    /**
     * Choose, which VenueStaffRole to update.
     */
    where: VenueStaffRoleWhereUniqueInput
  }

  /**
   * VenueStaffRole updateMany
   */
  export type VenueStaffRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VenueStaffRoles.
     */
    data: XOR<VenueStaffRoleUpdateManyMutationInput, VenueStaffRoleUncheckedUpdateManyInput>
    /**
     * Filter which VenueStaffRoles to update
     */
    where?: VenueStaffRoleWhereInput
    /**
     * Limit how many VenueStaffRoles to update.
     */
    limit?: number
  }

  /**
   * VenueStaffRole updateManyAndReturn
   */
  export type VenueStaffRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueStaffRole
     */
    select?: VenueStaffRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VenueStaffRole
     */
    omit?: VenueStaffRoleOmit<ExtArgs> | null
    /**
     * The data used to update VenueStaffRoles.
     */
    data: XOR<VenueStaffRoleUpdateManyMutationInput, VenueStaffRoleUncheckedUpdateManyInput>
    /**
     * Filter which VenueStaffRoles to update
     */
    where?: VenueStaffRoleWhereInput
    /**
     * Limit how many VenueStaffRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueStaffRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VenueStaffRole upsert
   */
  export type VenueStaffRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueStaffRole
     */
    select?: VenueStaffRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueStaffRole
     */
    omit?: VenueStaffRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueStaffRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the VenueStaffRole to update in case it exists.
     */
    where: VenueStaffRoleWhereUniqueInput
    /**
     * In case the VenueStaffRole found by the `where` argument doesn't exist, create a new VenueStaffRole with this data.
     */
    create: XOR<VenueStaffRoleCreateInput, VenueStaffRoleUncheckedCreateInput>
    /**
     * In case the VenueStaffRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueStaffRoleUpdateInput, VenueStaffRoleUncheckedUpdateInput>
  }

  /**
   * VenueStaffRole delete
   */
  export type VenueStaffRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueStaffRole
     */
    select?: VenueStaffRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueStaffRole
     */
    omit?: VenueStaffRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueStaffRoleInclude<ExtArgs> | null
    /**
     * Filter which VenueStaffRole to delete.
     */
    where: VenueStaffRoleWhereUniqueInput
  }

  /**
   * VenueStaffRole deleteMany
   */
  export type VenueStaffRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VenueStaffRoles to delete
     */
    where?: VenueStaffRoleWhereInput
    /**
     * Limit how many VenueStaffRoles to delete.
     */
    limit?: number
  }

  /**
   * VenueStaffRole without action
   */
  export type VenueStaffRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueStaffRole
     */
    select?: VenueStaffRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueStaffRole
     */
    omit?: VenueStaffRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueStaffRoleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BandScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type BandScalarFieldEnum = (typeof BandScalarFieldEnum)[keyof typeof BandScalarFieldEnum]


  export const VenueScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    address2: 'address2',
    city: 'city',
    state: 'state',
    zip: 'zip',
    country: 'country',
    phone: 'phone',
    email: 'email'
  };

  export type VenueScalarFieldEnum = (typeof VenueScalarFieldEnum)[keyof typeof VenueScalarFieldEnum]


  export const BandMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bandId: 'bandId'
  };

  export type BandMemberScalarFieldEnum = (typeof BandMemberScalarFieldEnum)[keyof typeof BandMemberScalarFieldEnum]


  export const VenueStaffRoleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    venueId: 'venueId',
    role: 'role'
  };

  export type VenueStaffRoleScalarFieldEnum = (typeof VenueStaffRoleScalarFieldEnum)[keyof typeof VenueStaffRoleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    bandMemberships?: BandMemberListRelationFilter
    venueStaffRoles?: VenueStaffRoleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    bandMemberships?: BandMemberOrderByRelationAggregateInput
    venueStaffRoles?: VenueStaffRoleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    bandMemberships?: BandMemberListRelationFilter
    venueStaffRoles?: VenueStaffRoleListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type BandWhereInput = {
    AND?: BandWhereInput | BandWhereInput[]
    OR?: BandWhereInput[]
    NOT?: BandWhereInput | BandWhereInput[]
    id?: IntFilter<"Band"> | number
    name?: StringFilter<"Band"> | string
    members?: BandMemberListRelationFilter
  }

  export type BandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    members?: BandMemberOrderByRelationAggregateInput
  }

  export type BandWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BandWhereInput | BandWhereInput[]
    OR?: BandWhereInput[]
    NOT?: BandWhereInput | BandWhereInput[]
    name?: StringFilter<"Band"> | string
    members?: BandMemberListRelationFilter
  }, "id">

  export type BandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: BandCountOrderByAggregateInput
    _avg?: BandAvgOrderByAggregateInput
    _max?: BandMaxOrderByAggregateInput
    _min?: BandMinOrderByAggregateInput
    _sum?: BandSumOrderByAggregateInput
  }

  export type BandScalarWhereWithAggregatesInput = {
    AND?: BandScalarWhereWithAggregatesInput | BandScalarWhereWithAggregatesInput[]
    OR?: BandScalarWhereWithAggregatesInput[]
    NOT?: BandScalarWhereWithAggregatesInput | BandScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Band"> | number
    name?: StringWithAggregatesFilter<"Band"> | string
  }

  export type VenueWhereInput = {
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    id?: IntFilter<"Venue"> | number
    name?: StringFilter<"Venue"> | string
    address?: StringFilter<"Venue"> | string
    address2?: StringNullableFilter<"Venue"> | string | null
    city?: StringFilter<"Venue"> | string
    state?: StringFilter<"Venue"> | string
    zip?: StringFilter<"Venue"> | string
    country?: StringFilter<"Venue"> | string
    phone?: StringNullableFilter<"Venue"> | string | null
    email?: StringFilter<"Venue"> | string
    staff?: VenueStaffRoleListRelationFilter
  }

  export type VenueOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    address2?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrder
    staff?: VenueStaffRoleOrderByRelationAggregateInput
  }

  export type VenueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    name?: StringFilter<"Venue"> | string
    address?: StringFilter<"Venue"> | string
    address2?: StringNullableFilter<"Venue"> | string | null
    city?: StringFilter<"Venue"> | string
    state?: StringFilter<"Venue"> | string
    zip?: StringFilter<"Venue"> | string
    country?: StringFilter<"Venue"> | string
    phone?: StringNullableFilter<"Venue"> | string | null
    email?: StringFilter<"Venue"> | string
    staff?: VenueStaffRoleListRelationFilter
  }, "id">

  export type VenueOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    address2?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrder
    _count?: VenueCountOrderByAggregateInput
    _avg?: VenueAvgOrderByAggregateInput
    _max?: VenueMaxOrderByAggregateInput
    _min?: VenueMinOrderByAggregateInput
    _sum?: VenueSumOrderByAggregateInput
  }

  export type VenueScalarWhereWithAggregatesInput = {
    AND?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    OR?: VenueScalarWhereWithAggregatesInput[]
    NOT?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Venue"> | number
    name?: StringWithAggregatesFilter<"Venue"> | string
    address?: StringWithAggregatesFilter<"Venue"> | string
    address2?: StringNullableWithAggregatesFilter<"Venue"> | string | null
    city?: StringWithAggregatesFilter<"Venue"> | string
    state?: StringWithAggregatesFilter<"Venue"> | string
    zip?: StringWithAggregatesFilter<"Venue"> | string
    country?: StringWithAggregatesFilter<"Venue"> | string
    phone?: StringNullableWithAggregatesFilter<"Venue"> | string | null
    email?: StringWithAggregatesFilter<"Venue"> | string
  }

  export type BandMemberWhereInput = {
    AND?: BandMemberWhereInput | BandMemberWhereInput[]
    OR?: BandMemberWhereInput[]
    NOT?: BandMemberWhereInput | BandMemberWhereInput[]
    id?: IntFilter<"BandMember"> | number
    userId?: IntFilter<"BandMember"> | number
    bandId?: IntFilter<"BandMember"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    band?: XOR<BandScalarRelationFilter, BandWhereInput>
  }

  export type BandMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bandId?: SortOrder
    user?: UserOrderByWithRelationInput
    band?: BandOrderByWithRelationInput
  }

  export type BandMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_bandId?: BandMemberUserIdBandIdCompoundUniqueInput
    AND?: BandMemberWhereInput | BandMemberWhereInput[]
    OR?: BandMemberWhereInput[]
    NOT?: BandMemberWhereInput | BandMemberWhereInput[]
    userId?: IntFilter<"BandMember"> | number
    bandId?: IntFilter<"BandMember"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    band?: XOR<BandScalarRelationFilter, BandWhereInput>
  }, "id" | "userId_bandId">

  export type BandMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bandId?: SortOrder
    _count?: BandMemberCountOrderByAggregateInput
    _avg?: BandMemberAvgOrderByAggregateInput
    _max?: BandMemberMaxOrderByAggregateInput
    _min?: BandMemberMinOrderByAggregateInput
    _sum?: BandMemberSumOrderByAggregateInput
  }

  export type BandMemberScalarWhereWithAggregatesInput = {
    AND?: BandMemberScalarWhereWithAggregatesInput | BandMemberScalarWhereWithAggregatesInput[]
    OR?: BandMemberScalarWhereWithAggregatesInput[]
    NOT?: BandMemberScalarWhereWithAggregatesInput | BandMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BandMember"> | number
    userId?: IntWithAggregatesFilter<"BandMember"> | number
    bandId?: IntWithAggregatesFilter<"BandMember"> | number
  }

  export type VenueStaffRoleWhereInput = {
    AND?: VenueStaffRoleWhereInput | VenueStaffRoleWhereInput[]
    OR?: VenueStaffRoleWhereInput[]
    NOT?: VenueStaffRoleWhereInput | VenueStaffRoleWhereInput[]
    id?: IntFilter<"VenueStaffRole"> | number
    userId?: IntFilter<"VenueStaffRole"> | number
    venueId?: IntFilter<"VenueStaffRole"> | number
    role?: StringFilter<"VenueStaffRole"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
  }

  export type VenueStaffRoleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
    role?: SortOrder
    user?: UserOrderByWithRelationInput
    venue?: VenueOrderByWithRelationInput
  }

  export type VenueStaffRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_venueId?: VenueStaffRoleUserIdVenueIdCompoundUniqueInput
    AND?: VenueStaffRoleWhereInput | VenueStaffRoleWhereInput[]
    OR?: VenueStaffRoleWhereInput[]
    NOT?: VenueStaffRoleWhereInput | VenueStaffRoleWhereInput[]
    userId?: IntFilter<"VenueStaffRole"> | number
    venueId?: IntFilter<"VenueStaffRole"> | number
    role?: StringFilter<"VenueStaffRole"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
  }, "id" | "userId_venueId">

  export type VenueStaffRoleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
    role?: SortOrder
    _count?: VenueStaffRoleCountOrderByAggregateInput
    _avg?: VenueStaffRoleAvgOrderByAggregateInput
    _max?: VenueStaffRoleMaxOrderByAggregateInput
    _min?: VenueStaffRoleMinOrderByAggregateInput
    _sum?: VenueStaffRoleSumOrderByAggregateInput
  }

  export type VenueStaffRoleScalarWhereWithAggregatesInput = {
    AND?: VenueStaffRoleScalarWhereWithAggregatesInput | VenueStaffRoleScalarWhereWithAggregatesInput[]
    OR?: VenueStaffRoleScalarWhereWithAggregatesInput[]
    NOT?: VenueStaffRoleScalarWhereWithAggregatesInput | VenueStaffRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VenueStaffRole"> | number
    userId?: IntWithAggregatesFilter<"VenueStaffRole"> | number
    venueId?: IntWithAggregatesFilter<"VenueStaffRole"> | number
    role?: StringWithAggregatesFilter<"VenueStaffRole"> | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    bandMemberships?: BandMemberCreateNestedManyWithoutUserInput
    venueStaffRoles?: VenueStaffRoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    bandMemberships?: BandMemberUncheckedCreateNestedManyWithoutUserInput
    venueStaffRoles?: VenueStaffRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bandMemberships?: BandMemberUpdateManyWithoutUserNestedInput
    venueStaffRoles?: VenueStaffRoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bandMemberships?: BandMemberUncheckedUpdateManyWithoutUserNestedInput
    venueStaffRoles?: VenueStaffRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BandCreateInput = {
    name: string
    members?: BandMemberCreateNestedManyWithoutBandInput
  }

  export type BandUncheckedCreateInput = {
    id?: number
    name: string
    members?: BandMemberUncheckedCreateNestedManyWithoutBandInput
  }

  export type BandUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    members?: BandMemberUpdateManyWithoutBandNestedInput
  }

  export type BandUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    members?: BandMemberUncheckedUpdateManyWithoutBandNestedInput
  }

  export type BandCreateManyInput = {
    id?: number
    name: string
  }

  export type BandUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BandUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VenueCreateInput = {
    name: string
    address: string
    address2?: string | null
    city: string
    state: string
    zip: string
    country: string
    phone?: string | null
    email: string
    staff?: VenueStaffRoleCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    address2?: string | null
    city: string
    state: string
    zip: string
    country: string
    phone?: string | null
    email: string
    staff?: VenueStaffRoleUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    staff?: VenueStaffRoleUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    staff?: VenueStaffRoleUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueCreateManyInput = {
    id?: number
    name: string
    address: string
    address2?: string | null
    city: string
    state: string
    zip: string
    country: string
    phone?: string | null
    email: string
  }

  export type VenueUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type VenueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type BandMemberCreateInput = {
    user: UserCreateNestedOneWithoutBandMembershipsInput
    band: BandCreateNestedOneWithoutMembersInput
  }

  export type BandMemberUncheckedCreateInput = {
    id?: number
    userId: number
    bandId: number
  }

  export type BandMemberUpdateInput = {
    user?: UserUpdateOneRequiredWithoutBandMembershipsNestedInput
    band?: BandUpdateOneRequiredWithoutMembersNestedInput
  }

  export type BandMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bandId?: IntFieldUpdateOperationsInput | number
  }

  export type BandMemberCreateManyInput = {
    id?: number
    userId: number
    bandId: number
  }

  export type BandMemberUpdateManyMutationInput = {

  }

  export type BandMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bandId?: IntFieldUpdateOperationsInput | number
  }

  export type VenueStaffRoleCreateInput = {
    role: string
    user: UserCreateNestedOneWithoutVenueStaffRolesInput
    venue: VenueCreateNestedOneWithoutStaffInput
  }

  export type VenueStaffRoleUncheckedCreateInput = {
    id?: number
    userId: number
    venueId: number
    role: string
  }

  export type VenueStaffRoleUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVenueStaffRolesNestedInput
    venue?: VenueUpdateOneRequiredWithoutStaffNestedInput
  }

  export type VenueStaffRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    venueId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type VenueStaffRoleCreateManyInput = {
    id?: number
    userId: number
    venueId: number
    role: string
  }

  export type VenueStaffRoleUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type VenueStaffRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    venueId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BandMemberListRelationFilter = {
    every?: BandMemberWhereInput
    some?: BandMemberWhereInput
    none?: BandMemberWhereInput
  }

  export type VenueStaffRoleListRelationFilter = {
    every?: VenueStaffRoleWhereInput
    some?: VenueStaffRoleWhereInput
    none?: VenueStaffRoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BandMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VenueStaffRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BandAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BandSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VenueCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type VenueAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VenueMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type VenueMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type VenueSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BandScalarRelationFilter = {
    is?: BandWhereInput
    isNot?: BandWhereInput
  }

  export type BandMemberUserIdBandIdCompoundUniqueInput = {
    userId: number
    bandId: number
  }

  export type BandMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bandId?: SortOrder
  }

  export type BandMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bandId?: SortOrder
  }

  export type BandMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bandId?: SortOrder
  }

  export type BandMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bandId?: SortOrder
  }

  export type BandMemberSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bandId?: SortOrder
  }

  export type VenueScalarRelationFilter = {
    is?: VenueWhereInput
    isNot?: VenueWhereInput
  }

  export type VenueStaffRoleUserIdVenueIdCompoundUniqueInput = {
    userId: number
    venueId: number
  }

  export type VenueStaffRoleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
    role?: SortOrder
  }

  export type VenueStaffRoleAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
  }

  export type VenueStaffRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
    role?: SortOrder
  }

  export type VenueStaffRoleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
    role?: SortOrder
  }

  export type VenueStaffRoleSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
  }

  export type BandMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<BandMemberCreateWithoutUserInput, BandMemberUncheckedCreateWithoutUserInput> | BandMemberCreateWithoutUserInput[] | BandMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BandMemberCreateOrConnectWithoutUserInput | BandMemberCreateOrConnectWithoutUserInput[]
    createMany?: BandMemberCreateManyUserInputEnvelope
    connect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
  }

  export type VenueStaffRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<VenueStaffRoleCreateWithoutUserInput, VenueStaffRoleUncheckedCreateWithoutUserInput> | VenueStaffRoleCreateWithoutUserInput[] | VenueStaffRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VenueStaffRoleCreateOrConnectWithoutUserInput | VenueStaffRoleCreateOrConnectWithoutUserInput[]
    createMany?: VenueStaffRoleCreateManyUserInputEnvelope
    connect?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
  }

  export type BandMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BandMemberCreateWithoutUserInput, BandMemberUncheckedCreateWithoutUserInput> | BandMemberCreateWithoutUserInput[] | BandMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BandMemberCreateOrConnectWithoutUserInput | BandMemberCreateOrConnectWithoutUserInput[]
    createMany?: BandMemberCreateManyUserInputEnvelope
    connect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
  }

  export type VenueStaffRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VenueStaffRoleCreateWithoutUserInput, VenueStaffRoleUncheckedCreateWithoutUserInput> | VenueStaffRoleCreateWithoutUserInput[] | VenueStaffRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VenueStaffRoleCreateOrConnectWithoutUserInput | VenueStaffRoleCreateOrConnectWithoutUserInput[]
    createMany?: VenueStaffRoleCreateManyUserInputEnvelope
    connect?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BandMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<BandMemberCreateWithoutUserInput, BandMemberUncheckedCreateWithoutUserInput> | BandMemberCreateWithoutUserInput[] | BandMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BandMemberCreateOrConnectWithoutUserInput | BandMemberCreateOrConnectWithoutUserInput[]
    upsert?: BandMemberUpsertWithWhereUniqueWithoutUserInput | BandMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BandMemberCreateManyUserInputEnvelope
    set?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    disconnect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    delete?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    connect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    update?: BandMemberUpdateWithWhereUniqueWithoutUserInput | BandMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BandMemberUpdateManyWithWhereWithoutUserInput | BandMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BandMemberScalarWhereInput | BandMemberScalarWhereInput[]
  }

  export type VenueStaffRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<VenueStaffRoleCreateWithoutUserInput, VenueStaffRoleUncheckedCreateWithoutUserInput> | VenueStaffRoleCreateWithoutUserInput[] | VenueStaffRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VenueStaffRoleCreateOrConnectWithoutUserInput | VenueStaffRoleCreateOrConnectWithoutUserInput[]
    upsert?: VenueStaffRoleUpsertWithWhereUniqueWithoutUserInput | VenueStaffRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VenueStaffRoleCreateManyUserInputEnvelope
    set?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
    disconnect?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
    delete?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
    connect?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
    update?: VenueStaffRoleUpdateWithWhereUniqueWithoutUserInput | VenueStaffRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VenueStaffRoleUpdateManyWithWhereWithoutUserInput | VenueStaffRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VenueStaffRoleScalarWhereInput | VenueStaffRoleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BandMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BandMemberCreateWithoutUserInput, BandMemberUncheckedCreateWithoutUserInput> | BandMemberCreateWithoutUserInput[] | BandMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BandMemberCreateOrConnectWithoutUserInput | BandMemberCreateOrConnectWithoutUserInput[]
    upsert?: BandMemberUpsertWithWhereUniqueWithoutUserInput | BandMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BandMemberCreateManyUserInputEnvelope
    set?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    disconnect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    delete?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    connect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    update?: BandMemberUpdateWithWhereUniqueWithoutUserInput | BandMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BandMemberUpdateManyWithWhereWithoutUserInput | BandMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BandMemberScalarWhereInput | BandMemberScalarWhereInput[]
  }

  export type VenueStaffRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VenueStaffRoleCreateWithoutUserInput, VenueStaffRoleUncheckedCreateWithoutUserInput> | VenueStaffRoleCreateWithoutUserInput[] | VenueStaffRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VenueStaffRoleCreateOrConnectWithoutUserInput | VenueStaffRoleCreateOrConnectWithoutUserInput[]
    upsert?: VenueStaffRoleUpsertWithWhereUniqueWithoutUserInput | VenueStaffRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VenueStaffRoleCreateManyUserInputEnvelope
    set?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
    disconnect?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
    delete?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
    connect?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
    update?: VenueStaffRoleUpdateWithWhereUniqueWithoutUserInput | VenueStaffRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VenueStaffRoleUpdateManyWithWhereWithoutUserInput | VenueStaffRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VenueStaffRoleScalarWhereInput | VenueStaffRoleScalarWhereInput[]
  }

  export type BandMemberCreateNestedManyWithoutBandInput = {
    create?: XOR<BandMemberCreateWithoutBandInput, BandMemberUncheckedCreateWithoutBandInput> | BandMemberCreateWithoutBandInput[] | BandMemberUncheckedCreateWithoutBandInput[]
    connectOrCreate?: BandMemberCreateOrConnectWithoutBandInput | BandMemberCreateOrConnectWithoutBandInput[]
    createMany?: BandMemberCreateManyBandInputEnvelope
    connect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
  }

  export type BandMemberUncheckedCreateNestedManyWithoutBandInput = {
    create?: XOR<BandMemberCreateWithoutBandInput, BandMemberUncheckedCreateWithoutBandInput> | BandMemberCreateWithoutBandInput[] | BandMemberUncheckedCreateWithoutBandInput[]
    connectOrCreate?: BandMemberCreateOrConnectWithoutBandInput | BandMemberCreateOrConnectWithoutBandInput[]
    createMany?: BandMemberCreateManyBandInputEnvelope
    connect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
  }

  export type BandMemberUpdateManyWithoutBandNestedInput = {
    create?: XOR<BandMemberCreateWithoutBandInput, BandMemberUncheckedCreateWithoutBandInput> | BandMemberCreateWithoutBandInput[] | BandMemberUncheckedCreateWithoutBandInput[]
    connectOrCreate?: BandMemberCreateOrConnectWithoutBandInput | BandMemberCreateOrConnectWithoutBandInput[]
    upsert?: BandMemberUpsertWithWhereUniqueWithoutBandInput | BandMemberUpsertWithWhereUniqueWithoutBandInput[]
    createMany?: BandMemberCreateManyBandInputEnvelope
    set?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    disconnect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    delete?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    connect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    update?: BandMemberUpdateWithWhereUniqueWithoutBandInput | BandMemberUpdateWithWhereUniqueWithoutBandInput[]
    updateMany?: BandMemberUpdateManyWithWhereWithoutBandInput | BandMemberUpdateManyWithWhereWithoutBandInput[]
    deleteMany?: BandMemberScalarWhereInput | BandMemberScalarWhereInput[]
  }

  export type BandMemberUncheckedUpdateManyWithoutBandNestedInput = {
    create?: XOR<BandMemberCreateWithoutBandInput, BandMemberUncheckedCreateWithoutBandInput> | BandMemberCreateWithoutBandInput[] | BandMemberUncheckedCreateWithoutBandInput[]
    connectOrCreate?: BandMemberCreateOrConnectWithoutBandInput | BandMemberCreateOrConnectWithoutBandInput[]
    upsert?: BandMemberUpsertWithWhereUniqueWithoutBandInput | BandMemberUpsertWithWhereUniqueWithoutBandInput[]
    createMany?: BandMemberCreateManyBandInputEnvelope
    set?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    disconnect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    delete?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    connect?: BandMemberWhereUniqueInput | BandMemberWhereUniqueInput[]
    update?: BandMemberUpdateWithWhereUniqueWithoutBandInput | BandMemberUpdateWithWhereUniqueWithoutBandInput[]
    updateMany?: BandMemberUpdateManyWithWhereWithoutBandInput | BandMemberUpdateManyWithWhereWithoutBandInput[]
    deleteMany?: BandMemberScalarWhereInput | BandMemberScalarWhereInput[]
  }

  export type VenueStaffRoleCreateNestedManyWithoutVenueInput = {
    create?: XOR<VenueStaffRoleCreateWithoutVenueInput, VenueStaffRoleUncheckedCreateWithoutVenueInput> | VenueStaffRoleCreateWithoutVenueInput[] | VenueStaffRoleUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenueStaffRoleCreateOrConnectWithoutVenueInput | VenueStaffRoleCreateOrConnectWithoutVenueInput[]
    createMany?: VenueStaffRoleCreateManyVenueInputEnvelope
    connect?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
  }

  export type VenueStaffRoleUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<VenueStaffRoleCreateWithoutVenueInput, VenueStaffRoleUncheckedCreateWithoutVenueInput> | VenueStaffRoleCreateWithoutVenueInput[] | VenueStaffRoleUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenueStaffRoleCreateOrConnectWithoutVenueInput | VenueStaffRoleCreateOrConnectWithoutVenueInput[]
    createMany?: VenueStaffRoleCreateManyVenueInputEnvelope
    connect?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
  }

  export type VenueStaffRoleUpdateManyWithoutVenueNestedInput = {
    create?: XOR<VenueStaffRoleCreateWithoutVenueInput, VenueStaffRoleUncheckedCreateWithoutVenueInput> | VenueStaffRoleCreateWithoutVenueInput[] | VenueStaffRoleUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenueStaffRoleCreateOrConnectWithoutVenueInput | VenueStaffRoleCreateOrConnectWithoutVenueInput[]
    upsert?: VenueStaffRoleUpsertWithWhereUniqueWithoutVenueInput | VenueStaffRoleUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: VenueStaffRoleCreateManyVenueInputEnvelope
    set?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
    disconnect?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
    delete?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
    connect?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
    update?: VenueStaffRoleUpdateWithWhereUniqueWithoutVenueInput | VenueStaffRoleUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: VenueStaffRoleUpdateManyWithWhereWithoutVenueInput | VenueStaffRoleUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: VenueStaffRoleScalarWhereInput | VenueStaffRoleScalarWhereInput[]
  }

  export type VenueStaffRoleUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<VenueStaffRoleCreateWithoutVenueInput, VenueStaffRoleUncheckedCreateWithoutVenueInput> | VenueStaffRoleCreateWithoutVenueInput[] | VenueStaffRoleUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenueStaffRoleCreateOrConnectWithoutVenueInput | VenueStaffRoleCreateOrConnectWithoutVenueInput[]
    upsert?: VenueStaffRoleUpsertWithWhereUniqueWithoutVenueInput | VenueStaffRoleUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: VenueStaffRoleCreateManyVenueInputEnvelope
    set?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
    disconnect?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
    delete?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
    connect?: VenueStaffRoleWhereUniqueInput | VenueStaffRoleWhereUniqueInput[]
    update?: VenueStaffRoleUpdateWithWhereUniqueWithoutVenueInput | VenueStaffRoleUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: VenueStaffRoleUpdateManyWithWhereWithoutVenueInput | VenueStaffRoleUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: VenueStaffRoleScalarWhereInput | VenueStaffRoleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBandMembershipsInput = {
    create?: XOR<UserCreateWithoutBandMembershipsInput, UserUncheckedCreateWithoutBandMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBandMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type BandCreateNestedOneWithoutMembersInput = {
    create?: XOR<BandCreateWithoutMembersInput, BandUncheckedCreateWithoutMembersInput>
    connectOrCreate?: BandCreateOrConnectWithoutMembersInput
    connect?: BandWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBandMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutBandMembershipsInput, UserUncheckedCreateWithoutBandMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBandMembershipsInput
    upsert?: UserUpsertWithoutBandMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBandMembershipsInput, UserUpdateWithoutBandMembershipsInput>, UserUncheckedUpdateWithoutBandMembershipsInput>
  }

  export type BandUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<BandCreateWithoutMembersInput, BandUncheckedCreateWithoutMembersInput>
    connectOrCreate?: BandCreateOrConnectWithoutMembersInput
    upsert?: BandUpsertWithoutMembersInput
    connect?: BandWhereUniqueInput
    update?: XOR<XOR<BandUpdateToOneWithWhereWithoutMembersInput, BandUpdateWithoutMembersInput>, BandUncheckedUpdateWithoutMembersInput>
  }

  export type UserCreateNestedOneWithoutVenueStaffRolesInput = {
    create?: XOR<UserCreateWithoutVenueStaffRolesInput, UserUncheckedCreateWithoutVenueStaffRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVenueStaffRolesInput
    connect?: UserWhereUniqueInput
  }

  export type VenueCreateNestedOneWithoutStaffInput = {
    create?: XOR<VenueCreateWithoutStaffInput, VenueUncheckedCreateWithoutStaffInput>
    connectOrCreate?: VenueCreateOrConnectWithoutStaffInput
    connect?: VenueWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVenueStaffRolesNestedInput = {
    create?: XOR<UserCreateWithoutVenueStaffRolesInput, UserUncheckedCreateWithoutVenueStaffRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVenueStaffRolesInput
    upsert?: UserUpsertWithoutVenueStaffRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVenueStaffRolesInput, UserUpdateWithoutVenueStaffRolesInput>, UserUncheckedUpdateWithoutVenueStaffRolesInput>
  }

  export type VenueUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<VenueCreateWithoutStaffInput, VenueUncheckedCreateWithoutStaffInput>
    connectOrCreate?: VenueCreateOrConnectWithoutStaffInput
    upsert?: VenueUpsertWithoutStaffInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutStaffInput, VenueUpdateWithoutStaffInput>, VenueUncheckedUpdateWithoutStaffInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BandMemberCreateWithoutUserInput = {
    band: BandCreateNestedOneWithoutMembersInput
  }

  export type BandMemberUncheckedCreateWithoutUserInput = {
    id?: number
    bandId: number
  }

  export type BandMemberCreateOrConnectWithoutUserInput = {
    where: BandMemberWhereUniqueInput
    create: XOR<BandMemberCreateWithoutUserInput, BandMemberUncheckedCreateWithoutUserInput>
  }

  export type BandMemberCreateManyUserInputEnvelope = {
    data: BandMemberCreateManyUserInput | BandMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VenueStaffRoleCreateWithoutUserInput = {
    role: string
    venue: VenueCreateNestedOneWithoutStaffInput
  }

  export type VenueStaffRoleUncheckedCreateWithoutUserInput = {
    id?: number
    venueId: number
    role: string
  }

  export type VenueStaffRoleCreateOrConnectWithoutUserInput = {
    where: VenueStaffRoleWhereUniqueInput
    create: XOR<VenueStaffRoleCreateWithoutUserInput, VenueStaffRoleUncheckedCreateWithoutUserInput>
  }

  export type VenueStaffRoleCreateManyUserInputEnvelope = {
    data: VenueStaffRoleCreateManyUserInput | VenueStaffRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BandMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: BandMemberWhereUniqueInput
    update: XOR<BandMemberUpdateWithoutUserInput, BandMemberUncheckedUpdateWithoutUserInput>
    create: XOR<BandMemberCreateWithoutUserInput, BandMemberUncheckedCreateWithoutUserInput>
  }

  export type BandMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: BandMemberWhereUniqueInput
    data: XOR<BandMemberUpdateWithoutUserInput, BandMemberUncheckedUpdateWithoutUserInput>
  }

  export type BandMemberUpdateManyWithWhereWithoutUserInput = {
    where: BandMemberScalarWhereInput
    data: XOR<BandMemberUpdateManyMutationInput, BandMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type BandMemberScalarWhereInput = {
    AND?: BandMemberScalarWhereInput | BandMemberScalarWhereInput[]
    OR?: BandMemberScalarWhereInput[]
    NOT?: BandMemberScalarWhereInput | BandMemberScalarWhereInput[]
    id?: IntFilter<"BandMember"> | number
    userId?: IntFilter<"BandMember"> | number
    bandId?: IntFilter<"BandMember"> | number
  }

  export type VenueStaffRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: VenueStaffRoleWhereUniqueInput
    update: XOR<VenueStaffRoleUpdateWithoutUserInput, VenueStaffRoleUncheckedUpdateWithoutUserInput>
    create: XOR<VenueStaffRoleCreateWithoutUserInput, VenueStaffRoleUncheckedCreateWithoutUserInput>
  }

  export type VenueStaffRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: VenueStaffRoleWhereUniqueInput
    data: XOR<VenueStaffRoleUpdateWithoutUserInput, VenueStaffRoleUncheckedUpdateWithoutUserInput>
  }

  export type VenueStaffRoleUpdateManyWithWhereWithoutUserInput = {
    where: VenueStaffRoleScalarWhereInput
    data: XOR<VenueStaffRoleUpdateManyMutationInput, VenueStaffRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type VenueStaffRoleScalarWhereInput = {
    AND?: VenueStaffRoleScalarWhereInput | VenueStaffRoleScalarWhereInput[]
    OR?: VenueStaffRoleScalarWhereInput[]
    NOT?: VenueStaffRoleScalarWhereInput | VenueStaffRoleScalarWhereInput[]
    id?: IntFilter<"VenueStaffRole"> | number
    userId?: IntFilter<"VenueStaffRole"> | number
    venueId?: IntFilter<"VenueStaffRole"> | number
    role?: StringFilter<"VenueStaffRole"> | string
  }

  export type BandMemberCreateWithoutBandInput = {
    user: UserCreateNestedOneWithoutBandMembershipsInput
  }

  export type BandMemberUncheckedCreateWithoutBandInput = {
    id?: number
    userId: number
  }

  export type BandMemberCreateOrConnectWithoutBandInput = {
    where: BandMemberWhereUniqueInput
    create: XOR<BandMemberCreateWithoutBandInput, BandMemberUncheckedCreateWithoutBandInput>
  }

  export type BandMemberCreateManyBandInputEnvelope = {
    data: BandMemberCreateManyBandInput | BandMemberCreateManyBandInput[]
    skipDuplicates?: boolean
  }

  export type BandMemberUpsertWithWhereUniqueWithoutBandInput = {
    where: BandMemberWhereUniqueInput
    update: XOR<BandMemberUpdateWithoutBandInput, BandMemberUncheckedUpdateWithoutBandInput>
    create: XOR<BandMemberCreateWithoutBandInput, BandMemberUncheckedCreateWithoutBandInput>
  }

  export type BandMemberUpdateWithWhereUniqueWithoutBandInput = {
    where: BandMemberWhereUniqueInput
    data: XOR<BandMemberUpdateWithoutBandInput, BandMemberUncheckedUpdateWithoutBandInput>
  }

  export type BandMemberUpdateManyWithWhereWithoutBandInput = {
    where: BandMemberScalarWhereInput
    data: XOR<BandMemberUpdateManyMutationInput, BandMemberUncheckedUpdateManyWithoutBandInput>
  }

  export type VenueStaffRoleCreateWithoutVenueInput = {
    role: string
    user: UserCreateNestedOneWithoutVenueStaffRolesInput
  }

  export type VenueStaffRoleUncheckedCreateWithoutVenueInput = {
    id?: number
    userId: number
    role: string
  }

  export type VenueStaffRoleCreateOrConnectWithoutVenueInput = {
    where: VenueStaffRoleWhereUniqueInput
    create: XOR<VenueStaffRoleCreateWithoutVenueInput, VenueStaffRoleUncheckedCreateWithoutVenueInput>
  }

  export type VenueStaffRoleCreateManyVenueInputEnvelope = {
    data: VenueStaffRoleCreateManyVenueInput | VenueStaffRoleCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type VenueStaffRoleUpsertWithWhereUniqueWithoutVenueInput = {
    where: VenueStaffRoleWhereUniqueInput
    update: XOR<VenueStaffRoleUpdateWithoutVenueInput, VenueStaffRoleUncheckedUpdateWithoutVenueInput>
    create: XOR<VenueStaffRoleCreateWithoutVenueInput, VenueStaffRoleUncheckedCreateWithoutVenueInput>
  }

  export type VenueStaffRoleUpdateWithWhereUniqueWithoutVenueInput = {
    where: VenueStaffRoleWhereUniqueInput
    data: XOR<VenueStaffRoleUpdateWithoutVenueInput, VenueStaffRoleUncheckedUpdateWithoutVenueInput>
  }

  export type VenueStaffRoleUpdateManyWithWhereWithoutVenueInput = {
    where: VenueStaffRoleScalarWhereInput
    data: XOR<VenueStaffRoleUpdateManyMutationInput, VenueStaffRoleUncheckedUpdateManyWithoutVenueInput>
  }

  export type UserCreateWithoutBandMembershipsInput = {
    email: string
    name?: string | null
    venueStaffRoles?: VenueStaffRoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBandMembershipsInput = {
    id?: number
    email: string
    name?: string | null
    venueStaffRoles?: VenueStaffRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBandMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBandMembershipsInput, UserUncheckedCreateWithoutBandMembershipsInput>
  }

  export type BandCreateWithoutMembersInput = {
    name: string
  }

  export type BandUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
  }

  export type BandCreateOrConnectWithoutMembersInput = {
    where: BandWhereUniqueInput
    create: XOR<BandCreateWithoutMembersInput, BandUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutBandMembershipsInput = {
    update: XOR<UserUpdateWithoutBandMembershipsInput, UserUncheckedUpdateWithoutBandMembershipsInput>
    create: XOR<UserCreateWithoutBandMembershipsInput, UserUncheckedCreateWithoutBandMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBandMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBandMembershipsInput, UserUncheckedUpdateWithoutBandMembershipsInput>
  }

  export type UserUpdateWithoutBandMembershipsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    venueStaffRoles?: VenueStaffRoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBandMembershipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    venueStaffRoles?: VenueStaffRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BandUpsertWithoutMembersInput = {
    update: XOR<BandUpdateWithoutMembersInput, BandUncheckedUpdateWithoutMembersInput>
    create: XOR<BandCreateWithoutMembersInput, BandUncheckedCreateWithoutMembersInput>
    where?: BandWhereInput
  }

  export type BandUpdateToOneWithWhereWithoutMembersInput = {
    where?: BandWhereInput
    data: XOR<BandUpdateWithoutMembersInput, BandUncheckedUpdateWithoutMembersInput>
  }

  export type BandUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BandUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutVenueStaffRolesInput = {
    email: string
    name?: string | null
    bandMemberships?: BandMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVenueStaffRolesInput = {
    id?: number
    email: string
    name?: string | null
    bandMemberships?: BandMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVenueStaffRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVenueStaffRolesInput, UserUncheckedCreateWithoutVenueStaffRolesInput>
  }

  export type VenueCreateWithoutStaffInput = {
    name: string
    address: string
    address2?: string | null
    city: string
    state: string
    zip: string
    country: string
    phone?: string | null
    email: string
  }

  export type VenueUncheckedCreateWithoutStaffInput = {
    id?: number
    name: string
    address: string
    address2?: string | null
    city: string
    state: string
    zip: string
    country: string
    phone?: string | null
    email: string
  }

  export type VenueCreateOrConnectWithoutStaffInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutStaffInput, VenueUncheckedCreateWithoutStaffInput>
  }

  export type UserUpsertWithoutVenueStaffRolesInput = {
    update: XOR<UserUpdateWithoutVenueStaffRolesInput, UserUncheckedUpdateWithoutVenueStaffRolesInput>
    create: XOR<UserCreateWithoutVenueStaffRolesInput, UserUncheckedCreateWithoutVenueStaffRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVenueStaffRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVenueStaffRolesInput, UserUncheckedUpdateWithoutVenueStaffRolesInput>
  }

  export type UserUpdateWithoutVenueStaffRolesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bandMemberships?: BandMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVenueStaffRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bandMemberships?: BandMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VenueUpsertWithoutStaffInput = {
    update: XOR<VenueUpdateWithoutStaffInput, VenueUncheckedUpdateWithoutStaffInput>
    create: XOR<VenueCreateWithoutStaffInput, VenueUncheckedCreateWithoutStaffInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutStaffInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutStaffInput, VenueUncheckedUpdateWithoutStaffInput>
  }

  export type VenueUpdateWithoutStaffInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type VenueUncheckedUpdateWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type BandMemberCreateManyUserInput = {
    id?: number
    bandId: number
  }

  export type VenueStaffRoleCreateManyUserInput = {
    id?: number
    venueId: number
    role: string
  }

  export type BandMemberUpdateWithoutUserInput = {
    band?: BandUpdateOneRequiredWithoutMembersNestedInput
  }

  export type BandMemberUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bandId?: IntFieldUpdateOperationsInput | number
  }

  export type BandMemberUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bandId?: IntFieldUpdateOperationsInput | number
  }

  export type VenueStaffRoleUpdateWithoutUserInput = {
    role?: StringFieldUpdateOperationsInput | string
    venue?: VenueUpdateOneRequiredWithoutStaffNestedInput
  }

  export type VenueStaffRoleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    venueId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type VenueStaffRoleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    venueId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type BandMemberCreateManyBandInput = {
    id?: number
    userId: number
  }

  export type BandMemberUpdateWithoutBandInput = {
    user?: UserUpdateOneRequiredWithoutBandMembershipsNestedInput
  }

  export type BandMemberUncheckedUpdateWithoutBandInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BandMemberUncheckedUpdateManyWithoutBandInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VenueStaffRoleCreateManyVenueInput = {
    id?: number
    userId: number
    role: string
  }

  export type VenueStaffRoleUpdateWithoutVenueInput = {
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVenueStaffRolesNestedInput
  }

  export type VenueStaffRoleUncheckedUpdateWithoutVenueInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type VenueStaffRoleUncheckedUpdateManyWithoutVenueInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}