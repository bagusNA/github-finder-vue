export interface User {
  id: number;
  name?: string | null;
  login: string;
  email?: string | null;
  html_url: string;
  avatar_url: string;
  created_at: string;
  public_repos: number;
  followers: number;
  following: number;

  company?: string | null;
  location?: string | null;
  bio?: string | null;
  twitter_username?: string | null;
  blog?: string | null;
}
