import { Client } from 'minio'

export let minio = new Client({
  endPoint: Deno.env.get('MinioContainer'),
  port: Number(Deno.env.get('MinioStoragePort')),
  useSSL: false,
  accessKey: Deno.env.get('MinioUsername'),
  secretKey: Deno.env.get('MinioPassword'),
})
