/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Basic user information
*/
export class PlayerBaseVo {
    /**
    * User\'s Uuid
    */
    'uuid'?: string;
    /**
    * Member ID
    */
    'memberId'?: number;
    /**
    * User Name
    */
    'userName'?: string;
    /**
    * Member Name
    */
    'memberName'?: string;
    /**
    * HEAD PORTRAIT
    */
    'avatar'?: string;
    /**
    * DEPARTMENT
    */
    'team'?: string;
    /**
    * Whether the user has modified the nickname
    */
    'isNickNameModified'?: boolean;
    /**
    * Whether the member has modified the nickname
    */
    'isMemberNameModified'?: boolean;
    /**
    * Email
    */
    'email'?: string;
    /**
    * User player type 1: members in the space have not been removed, 2 members outside the space have been removed, and 3 visitors (non space registered users)
    */
    'playerType'?: number;
    /**
    * default avatar color number
    */
    'avatarColor'?: number;
    /**
    * Nick Name
    */
    'nickName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "memberId",
            "baseName": "memberId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "userName",
            "baseName": "userName",
            "type": "string",
            "format": ""
        },
        {
            "name": "memberName",
            "baseName": "memberName",
            "type": "string",
            "format": ""
        },
        {
            "name": "avatar",
            "baseName": "avatar",
            "type": "string",
            "format": ""
        },
        {
            "name": "team",
            "baseName": "team",
            "type": "string",
            "format": ""
        },
        {
            "name": "isNickNameModified",
            "baseName": "isNickNameModified",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isMemberNameModified",
            "baseName": "isMemberNameModified",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "playerType",
            "baseName": "playerType",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "avatarColor",
            "baseName": "avatarColor",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "nickName",
            "baseName": "nickName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlayerBaseVo.attributeTypeMap;
    }

    public constructor() {
    }
}
