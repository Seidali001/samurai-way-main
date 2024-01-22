import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleIsFetching, toggleIsFollowingInProgress,
    unFollow,
    UsersFromServerType
} from "../../reducers/users-reducer";
import {AppRootStateType} from "../../redux-store/redux-store";
import Users from "./Users";
import {userApi} from "../../api/users";


export type UsersClassComponentPropsType = mapStateToPropsType & mapDispatchToPropsType;

export type mapStateToPropsType = {
    users: UsersFromServerType[]
    pageCount: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: Array<number>
}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (user: UsersFromServerType[]) => void
    setCurrentPage: (currentPage: number) => void
    setUsersTotalCount: (totalCount: number) => void
    toggleIsFollowingInProgress: (isFetching: boolean, userId: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    getUsersThunkCreator: () => void
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {

    return {
        users: state.usersPage.items,
        pageCount: state.usersPage.pageCount,
        totalUserCount: state.usersPage.totalUserCounter,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }

}

export class UsersClassApiComponent extends React.Component<UsersClassComponentPropsType> {
    componentDidMount() {
        this.props.getUsersThunkCreator()
    }

    setCurrentPageHandler = (currentPage: number) => {
        this.props.toggleIsFetching(true)
        userApi.getCurrentPageUsers(currentPage, 10)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setCurrentPage(currentPage)
            })
            .catch(error => {
                this.props.toggleIsFetching(false)
                console.error("Error fetching users:", error);
            });
    }

    render() {
        return (
            <>
                <Users
                    isFetching={this.props.isFetching}
                    isFollowingInProgress={this.props.isFollowingInProgress}
                    users={this.props.users}
                    totalUserCount={this.props.totalUserCount}
                    pageCount={this.props.pageCount}
                    currentPage={this.props.currentPage}
                    setCurrentPage={this.setCurrentPageHandler}
                    setFollow={this.props.unFollow}
                    setUnfollow={this.props.follow}
                    toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
                />
            </>
        );
    }
}

export const ConnectedUsersContainer = connect(mapStateToProps,
    {
        follow, unFollow,
        setUsers, setCurrentPage,
        setUsersTotalCount, toggleIsFetching,
        toggleIsFollowingInProgress, getUsersThunkCreator
    })(UsersClassApiComponent)




