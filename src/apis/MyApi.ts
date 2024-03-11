import { BodyCreateUserUserPost, HTTPValidationError } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class MyApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags user
   * @name ReadUserUserUserIdGet
   * @summary Read User
   * @request GET:/user/{user_id}
   * @response `200` `any` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  readUserUserUserIdGet = (userId: number, params: RequestParams = {}) =>
    this.http.request<any, HTTPValidationError>({
      path: `/user/${userId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name DeleteUserUserUserIdDelete
   * @summary Delete User
   * @request DELETE:/user/{user_id}
   * @response `200` `any` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  deleteUserUserUserIdDelete = (userId: number, params: RequestParams = {}) =>
    this.http.request<any, HTTPValidationError>({
      path: `/user/${userId}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name CreateUserUserPost
   * @summary Create User
   * @request POST:/user/
   * @response `200` `any` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  createUserUserPost = (data: BodyCreateUserUserPost, params: RequestParams = {}) =>
    this.http.request<any, HTTPValidationError>({
      path: `/user/`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name GetAllUserListUserContactsGet
   * @summary Get All User List
   * @request GET:/user/contacts/
   * @response `200` `any` Successful Response
   */
  getAllUserListUserContactsGet = (params: RequestParams = {}) =>
    this.http.request<any, any>({
      path: `/user/contacts/`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name UpdateContactUserContactsEmailGet
   * @summary Update Contact
   * @request GET:/user/contacts/{email}
   * @response `200` `any` Successful Response
   */
  updateContactUserContactsEmailGet = (email: string, params: RequestParams = {}) =>
    this.http.request<any, any>({
      path: `/user/contacts/${email}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
