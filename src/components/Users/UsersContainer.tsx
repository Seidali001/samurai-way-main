import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleIsFetching,
    unFollow,
    UsersFromServerType
} from "../../reducers/users-reducer";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux-store/redux-store";
import axios from "axios";
import Users from "./Users";
import zIndex from "@mui/material/styles/zIndex";


export type UsersClassComponentPropsType = mapStateToPropsType & mapDispatchToPropsType;

export type mapStateToPropsType = {
    users: UsersFromServerType[]
    pageCount: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}
export type mapDispatchToPropsType = {
    setFollowOnTrue: (userId: number) => void
    setFollowOnFalse: (userId: number) => void
    setUsersCallback: (user: UsersFromServerType[]) => void
    setCurrentPageCallback: (currentPage: number) => void
    setUsersTotalCountCallback: (totalCount: number) => void
    toggleIsFetchingCallback: (isFetching: boolean) => void
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {

    return {
        users: state.usersPage.items,
        pageCount: state.usersPage.pageCount,
        totalUserCount: state.usersPage.totalUserCounter,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }

}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {

    return {
        setFollowOnTrue: (userId: number) => {
            dispatch(follow(userId))
        },
        setFollowOnFalse: (userId: number) => {
            dispatch(unFollow(userId))
        },
        setUsersCallback: (user: UsersFromServerType[]) => {
            dispatch(setUsers(user))
        },
        setCurrentPageCallback: (currentPage: number) => {
            dispatch(setCurrentPage(currentPage))
        },
        setUsersTotalCountCallback: (totalCount: number) => {
            dispatch(setUsersTotalCount(totalCount))
        },
        toggleIsFetchingCallback: (isFetching: boolean) => {
            dispatch(toggleIsFetching(isFetching))
        }

    }

}

export class UsersClassApiComponent extends Component<UsersClassComponentPropsType> {
    constructor(props: UsersClassComponentPropsType) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        this.props.toggleIsFetchingCallback(true)
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => {
                this.props.toggleIsFetchingCallback(false)
                this.props.setUsersCallback(res.data.items);
                //   this.props.setUsersTotalCountCallback(res.data.totalCount)
            })
            .catch(error => {
                this.props.toggleIsFetchingCallback(false)

                console.error("Error fetching users:", error);
            });
    }

    setCurrentPageHandler = (currentPage: number) => {
        this.props.toggleIsFetchingCallback(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${10}`)
            .then(res => {
                this.props.toggleIsFetchingCallback(false)
                this.props.setUsersCallback(res.data.items);
                this.props.setCurrentPageCallback(currentPage)
            })
            .catch(error => {
                this.props.toggleIsFetchingCallback(false)
                console.error("Error fetching users:", error);
            });
    }

    render() {

        return (
            <>
                    <Users
                        isFetching={this.props.isFetching}
                        users={this.props.users}
                        totalUserCount={this.props.totalUserCount}
                        pageCount={this.props.pageCount}
                        currentPage={this.props.currentPage}
                        setCurrentPageHandler={this.setCurrentPageHandler}
                        setFollowOnFalse={this.props.setFollowOnFalse}
                        setFollowOnTrue={this.props.setFollowOnTrue}/>
            </>
        );
    }
}

export const ConnectedUsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassApiComponent)




