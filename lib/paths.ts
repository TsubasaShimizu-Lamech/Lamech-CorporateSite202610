// next/link と next/image 以外で参照するパス（<img src> など）に basePath を付ける
export const withBase = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`
