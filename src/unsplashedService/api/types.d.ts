export interface UnsplashResponse {
  total: number
  total_pages: number
  results: UnsplashImageResults[]
};

export interface UnsplashImageResults {
  urls: {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
    small_s3: string
  }
};
