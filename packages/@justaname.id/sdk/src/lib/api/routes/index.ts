import {
  ApiKeyRoute,
  IRoute,
  IsSubnameAvailableRoute,
  SIWERequestChallengeRoute,
  SIWEVerifyMessageRoute,
  SubnameAddRoute,
  SubnameAcceptRoute,
  SubnameGetAllByAddressRoute,
  SubnameGetAllByDomainChainIdRoute,
  SubnameGetByDomainNameChainIdRoute,
  SubnameGetBySubnameRoute,
  SubnameReserveRoute,
  SubnameRevokeRoute,
  SubnameSearchRoute,
  SubnameUpdateRoute,
  SubnameRecordsRoute,
} from '../../types';
import {
  ACCEPT_SUBNAME_ROUTE,
  ADD_SUBNAME_ROUTE,
  CHECK_SUBNAME_AVAILABILITY_ROUTE,
  GET_ALL_SUBNAMES_BY_ADDRESS_ROUTE,
  GET_ALL_SUBNAMES_BY_DOMAIN_ROUTE,
  GET_ALL_SUBNAMES_BY_INVITATION_ROUTE,
  GET_SUBNAME_BY_DOMAIN_NAME_CHAIN_ID_ROUTE,
  GET_SUBNAME_BY_SUBNAME_ROUTE,
  RESERVE_SUBNAME_ROUTE,
  REVOKE_SUBNAME_ROUTE,
  SEARCH_SUBNAMES_ROUTE,
  UPDATE_SUBNAME_ROUTE,
  RECORDS_BY_FULLNAME_ROUTE,
  REJECT_SUBNAME_ROUTE,
} from './subnames';
import { HEALTH_CHECK_ROUTE } from './api-key';
import {
  SIWE_REQUEST_CHALLENGE_ROUTE,
  SIWE_VERIFY_MESSAGE_ROUTE,
} from './siwe';
import { SubnameRejectRoute } from '../../types/subnames/reject';

export const Routes = {
  HEALTH_CHECK_ROUTE,
  SIWE_VERIFY_MESSAGE_ROUTE,
  SIWE_REQUEST_CHALLENGE_ROUTE,
  ACCEPT_SUBNAME_ROUTE,
  RESERVE_SUBNAME_ROUTE,
  ADD_SUBNAME_ROUTE,
  REJECT_SUBNAME_ROUTE,
  UPDATE_SUBNAME_ROUTE,
  REVOKE_SUBNAME_ROUTE,
  GET_SUBNAME_BY_DOMAIN_NAME_CHAIN_ID_ROUTE,
  GET_SUBNAME_BY_SUBNAME_ROUTE,
  GET_ALL_SUBNAMES_BY_DOMAIN_ROUTE,
  GET_ALL_SUBNAMES_BY_ADDRESS_ROUTE,
  GET_ALL_SUBNAMES_BY_INVITATION_ROUTE,
  CHECK_SUBNAME_AVAILABILITY_ROUTE,
  SEARCH_SUBNAMES_ROUTE,
  RECORDS_BY_FULLNAME_ROUTE,
} as const;

export type RoutesType = keyof typeof Routes;

export type IROUTES = {
  [key in RoutesType]: IRoute;
};
export interface ROUTES extends IROUTES {
  HEALTH_CHECK_ROUTE: ApiKeyRoute;
  SIWE_VERIFY_MESSAGE_ROUTE: SIWEVerifyMessageRoute;
  SIWE_REQUEST_CHALLENGE_ROUTE: SIWERequestChallengeRoute;
  ACCEPT_SUBNAME_ROUTE: SubnameAcceptRoute;
  RESERVE_SUBNAME_ROUTE: SubnameReserveRoute;
  ADD_SUBNAME_ROUTE: SubnameAddRoute;
  UPDATE_SUBNAME_ROUTE: SubnameUpdateRoute;
  REJECT_SUBNAME_ROUTE: SubnameRejectRoute;
  REVOKE_SUBNAME_ROUTE: SubnameRevokeRoute;
  GET_SUBNAME_BY_DOMAIN_NAME_CHAIN_ID_ROUTE: SubnameGetByDomainNameChainIdRoute;
  GET_SUBNAME_BY_SUBNAME_ROUTE: SubnameGetBySubnameRoute;
  GET_ALL_SUBNAMES_BY_DOMAIN_ROUTE: SubnameGetAllByDomainChainIdRoute;
  GET_ALL_SUBNAMES_BY_ADDRESS_ROUTE: SubnameGetAllByAddressRoute;
  GET_ALL_SUBNAMES_BY_INVITATION_ROUTE: SubnameGetAllByAddressRoute;
  CHECK_SUBNAME_AVAILABILITY_ROUTE: IsSubnameAvailableRoute;
  SEARCH_SUBNAMES_ROUTE: SubnameSearchRoute;
  RECORDS_BY_FULLNAME_ROUTE: SubnameRecordsRoute;
}
