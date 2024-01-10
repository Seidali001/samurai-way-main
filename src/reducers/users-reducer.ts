import {ActionsType} from "./types";


export type UsersFromServerType = {
    "name": string,
    "id": number,
    "uniqueUrlName": null,
    "photos": {
        "small": null,
        "large": null
    },
    "status": null,
    "followed": boolean
}

export type initialStateUsersType = typeof initialState

const initialState = {
    items: [] as Array<UsersFromServerType>,
    pageCount: 1,
    totalUserCounter: 100,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state: initialStateUsersType = initialState, action: ActionsType): initialStateUsersType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                items: state.items.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user
                })
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                items: state.items.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user
                })
            }
        }
        case "SET-USERS": {
            return {
                ...state,
                items: action.users
            }
        }
        case "SET-CURRENT-PAGE": {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case "SET-USERS-TOTAL-COUNT": {
            return {
                ...state,
                totalUserCounter: action.totalCount
            }
        }
        case "TOGGLE-IS-FETCHING": {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}


// Action Creators
export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}
export const unFollow = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}
export const setUsers = (users: UsersFromServerType[]) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: currentPage
    } as const
}
export const setUsersTotalCount = (totalCount: number) => {
    return {
        type: "SET-USERS-TOTAL-COUNT",
        totalCount: totalCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    } as const
}