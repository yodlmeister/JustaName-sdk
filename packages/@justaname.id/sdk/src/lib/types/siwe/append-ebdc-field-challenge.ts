import { ChainId, IRequest, IResponse, IRoute } from '../common';

/**
 * Represents a request to challenge to add EBDC permission.
 * @interface RequestAppendEbdcFieldChallengeRequest
 * @public
 */

export interface RequestAppendEbdcFieldChallengeRequest extends IRequest {

  /**
   *  Represents the ENS domain
   *  @type {string}
   */
  domain: string;

  /**
   * Represents the ethereum address to be challenged.
   * @type {string}
   */
  address: string;

  /**
   * Represents the origin of the request (e.g. the domain of the website).
   * @type {string}
   */
  origin: string;

  /**
   * Represents the chainId of the blockchain to be used.
   * @type {1 | 11155111}
   */
  chainId: ChainId;

  /**
   * Specifies the time-to-live (TTL) for a variable.
   * default: 120000 ms, 2 minutes ( 2 * 60 * 1000 )
   * @type {number}
   * @default 120000
   * @optional
   */
  ttl?: number;

  /**
   * Subname requesting the ABDC Permission
   * @type {string}
   */
  subname: string

  /**
   * Subname requesting the ABDC Permission
   * @type {string}
   */
  ensDomain: string
}

/**
 * Represents the response to a request to challenge a specific address using SIWE.
 * @interface RequestAppendEbdcFieldChallengeResponse
 * @public
 */
export interface RequestAppendEbdcFieldChallengeResponse extends IResponse{
  /**
   * Represents the challenge to be signed by the user.
   * @type {string}
   */
  challenge: string;
}

export interface RequestAppendEbdcFieldChallengeRoute extends IRoute {
  request: RequestAppendEbdcFieldChallengeRequest;
  response: RequestAppendEbdcFieldChallengeResponse;
  headers: NonNullable<unknown>;
}

export interface RequestAppendEbdcFieldChallengeParams extends Omit<RequestAppendEbdcFieldChallengeRequest, 'origin' | 'domain' | 'chainId' | 'ttl' | 'ensDomain'> {
  origin?: string,
  domain?: string,
  chainId?: ChainId,
  ttl?: number
  ensDomain?: string
}