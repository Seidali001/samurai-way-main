import {ActionsType} from "./types";
import {userApi} from "../api/users";
import {followApi} from "../api/follow";
import {Dispatch} from "redux";
import axios from "axios";


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
    totalUserCounter: 60,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: [] as Array<number>
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
                        console.log(user)
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
        case "TOGGLE-FOLLOWING-PROGRESS": {

            return {
                ...state,
                isFollowingInProgress: state.isFetching
                    ?
                    [...state.isFollowingInProgress, action.userId]
                    :
                    state.isFollowingInProgress.filter((id: number) => id === action.userId)
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
export const toggleIsFollowingInProgress = (isFollowing: boolean, userId: number) => {
    return {
        type: "TOGGLE-FOLLOWING-PROGRESS",
        isFollowing,
        userId
    } as const
}

export const getUsersTC = () => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    userApi.getUsers()
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            //   this.props.setUsersTotalCountCallback(res.data.totalCount)
        })
        .catch(error => {
            dispatch(toggleIsFetching(false))

            console.error("Error fetching users:", error);
        });
    axios.put("https://social-network.samuraijs.com/api/1.0/profile/status")
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.error(error)
        })
}

export const setCurrentPageTC = (currentPage: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    userApi.getCurrentPageUsers(currentPage, 10)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setCurrentPage(currentPage))
        })
        .catch(error => {
            dispatch(toggleIsFetching(false))
            console.error("Error fetching users:", error);
        });
}
export const setUnfollowTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingInProgress(true, userId))
    followApi.setUnfollowUser(userId)
        .then(data => {
            if (data.resultCode == 0) {
                dispatch(unFollow(userId))
            }
            dispatch(toggleIsFollowingInProgress(false, userId))
        })
        .catch(error => {
            dispatch(toggleIsFetching(false))
            console.error("Error unfollowing users:", error);
        });
}
export const setFollowTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingInProgress(true, userId))
    followApi.setFollowUser(userId)
        .then(data => {
            if (data.resultCode == 0) {
                dispatch(follow(userId))
            }
            dispatch(toggleIsFollowingInProgress(false, userId))
        })
        .catch(error => {
            dispatch(toggleIsFetching(false))
            console.error("Error following user:", error);
        });
}


