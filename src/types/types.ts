
export interface Movies {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    original_title:string,
    backdrop_path:string
  }
  export interface releaseState {
    data: Movies[];
    loading: "idle" | "pending" | "fulfilled" | "rejected";
    error: string | null;
  }  


  export interface PopularState {
    data: Movies[];
    loading: "idle" | "pending" | "fulfilled" | "rejected";
    error: string | null;
  }

 export interface trendingState {
    data: Movies[];
    loading: "idle" | "pending" | "fulfilled" | "rejected";
    error: string | null;
  }

  export interface movieState {
    data: Movies | null;
    loading: "idle" | "pending" | "fulfilled" | "rejected";
    error: string | null;
  }

  export interface SearcheState {
    data: Movies[];
    loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error: string | null;
  }