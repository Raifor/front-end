/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreatePacienteDto } from '../models/create-paciente-dto';
import { UpdatePacienteDto } from '../models/update-paciente-dto';

@Injectable({
  providedIn: 'root',
})
export class VetControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getById
   */
  static readonly GetByIdPath = '/v1/paciente/{id}';

  /**
   * End point para obter dados de paciente
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, VetControllerService.GetByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * End point para obter dados de paciente
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.getById$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation update
   */
  static readonly UpdatePath = '/v1/paciente/{id}';

  /**
   * End point para inclusão de paciente
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update$Response(params: {
    id: number;
    body: UpdatePacienteDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, VetControllerService.UpdatePath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * End point para inclusão de paciente
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update(params: {
    id: number;
    body: UpdatePacienteDto
  },
  context?: HttpContext

): Observable<any> {

    return this.update$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation remove
   */
  static readonly RemovePath = '/v1/paciente/{id}';

  /**
   * End point para excluir paciente
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `remove()` instead.
   *
   * This method doesn't expect any request body.
   */
  remove$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, VetControllerService.RemovePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * End point para excluir paciente
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `remove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  remove(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.remove$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation setStatusRetirada
   */
  static readonly SetStatusRetiradaPath = '/v1/paciente/status/retirada/{id}';

  /**
   * End point para alterar status do paciente para retirado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setStatusRetirada()` instead.
   *
   * This method doesn't expect any request body.
   */
  setStatusRetirada$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, VetControllerService.SetStatusRetiradaPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        }>;
      })
    );
  }

  /**
   * End point para alterar status do paciente para retirado
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `setStatusRetirada$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  setStatusRetirada(params: {
    id: number;
  },
  context?: HttpContext

): Observable<{
}> {

    return this.setStatusRetirada$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

  /**
   * Path part for operation setStatusEspera
   */
  static readonly SetStatusEsperaPath = '/v1/paciente/status/espera/{id}';

  /**
   * End point para alterar status do paciente para espera
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setStatusEspera()` instead.
   *
   * This method doesn't expect any request body.
   */
  setStatusEspera$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, VetControllerService.SetStatusEsperaPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        }>;
      })
    );
  }

  /**
   * End point para alterar status do paciente para espera
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `setStatusEspera$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  setStatusEspera(params: {
    id: number;
  },
  context?: HttpContext

): Observable<{
}> {

    return this.setStatusEspera$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

  /**
   * Path part for operation setStatusAtendimento
   */
  static readonly SetStatusAtendimentoPath = '/v1/paciente/status/atendimento/{id}';

  /**
   * End point para alterar status do paciente para atendimento
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setStatusAtendimento()` instead.
   *
   * This method doesn't expect any request body.
   */
  setStatusAtendimento$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, VetControllerService.SetStatusAtendimentoPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        }>;
      })
    );
  }

  /**
   * End point para alterar status do paciente para atendimento
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `setStatusAtendimento$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  setStatusAtendimento(params: {
    id: number;
  },
  context?: HttpContext

): Observable<{
}> {

    return this.setStatusAtendimento$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

  /**
   * Path part for operation setStatusAguardandoRetirada
   */
  static readonly SetStatusAguardandoRetiradaPath = '/v1/paciente/status/aguardadoRetirada/{id}';

  /**
   * End point para alterar status do paciente para aguardado retirado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setStatusAguardandoRetirada()` instead.
   *
   * This method doesn't expect any request body.
   */
  setStatusAguardandoRetirada$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, VetControllerService.SetStatusAguardandoRetiradaPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        }>;
      })
    );
  }

  /**
   * End point para alterar status do paciente para aguardado retirado
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `setStatusAguardandoRetirada$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  setStatusAguardandoRetirada(params: {
    id: number;
  },
  context?: HttpContext

): Observable<{
}> {

    return this.setStatusAguardandoRetirada$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

  /**
   * Path part for operation listAll
   */
  static readonly ListAllPath = '/v1/paciente';

  /**
   * lista todos os pacientes
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, VetControllerService.ListAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * lista todos os pacientes
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAll(params?: {
  },
  context?: HttpContext

): Observable<any> {

    return this.listAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation create
   */
  static readonly CreatePath = '/v1/paciente';

  /**
   * End point para inclusão de paciente
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params: {
    body: CreatePacienteDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, VetControllerService.CreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * End point para inclusão de paciente
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params: {
    body: CreatePacienteDto
  },
  context?: HttpContext

): Observable<any> {

    return this.create$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation listarPorSituacao
   */
  static readonly ListarPorSituacaoPath = '/v1/paciente/listarPorSituacao/{situacao}';

  /**
   * lista todos os pacientes por situação
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listarPorSituacao()` instead.
   *
   * This method doesn't expect any request body.
   */
  listarPorSituacao$Response(params: {
    situacao: 'EM_ESPERA' | 'EM_ATENDIMENTO' | 'AGUARDANDO_RETIRADA' | 'RETIRADO';
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, VetControllerService.ListarPorSituacaoPath, 'get');
    if (params) {
      rb.path('situacao', params.situacao, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * lista todos os pacientes por situação
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listarPorSituacao$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listarPorSituacao(params: {
    situacao: 'EM_ESPERA' | 'EM_ATENDIMENTO' | 'AGUARDANDO_RETIRADA' | 'RETIRADO';
  },
  context?: HttpContext

): Observable<any> {

    return this.listarPorSituacao$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
