import { Role } from "./Role";

export type User = {
    accountNonExpired?: boolean;
    accountNonLocked?: boolean;
    credentialNonExpired?: boolean;
    enabled?: boolean;
    first_name: string;
    id?: string;
    isAdmin?: boolean;
    last_name: string;
    password: string;
    role: Role;
    username: string;
}