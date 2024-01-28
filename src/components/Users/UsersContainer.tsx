import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsersTC,
    setCurrentPage, setCurrentPageTC, setFollowTC, setUnfollowTC,
    setUsers,
    setUsersTotalCount, toggleIsFetching, toggleIsFollowingInProgress,
    unFollow,
    UsersFromServerType
} from "../../reducers/users-reducer";
import {AppRootStateType} from "../../redux-store/redux-store";
import Users from "./Users";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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
    setUsers: (user: UsersFromServerType[]) => void
    setCurrentPage: (currentPage: number) => void
    setUsersTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    getUsersTC: () => void
    setCurrentPageTC: (currentPage: number) => void
    setFollowTC: (userId: number) => void
    setUnfollowTC: (userId: number) => void
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {

    return {
        users: state.usersPage.items,
        pageCount: state.usersPage.pageCount,
        totalUserCount: state.usersPage.totalUserCounter,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress,
    }

}

export class UsersClassApiComponent extends React.Component<UsersClassComponentPropsType> {
    componentDidMount() {
        this.props.getUsersTC()
    }


    setCurrentPageHandler = (currentPage: number) => {
        this.props.setCurrentPageTC(currentPage)
    }

    render() {

        return (
            <>
                <Users
                    key={"users"}
                    isFetching={this.props.isFetching}
                    isFollowingInProgress={this.props.isFollowingInProgress}
                    users={this.props.users}
                    totalUserCount={this.props.totalUserCount}
                    pageCount={this.props.pageCount}
                    currentPage={this.props.currentPage}
                    setCurrentPage={this.setCurrentPageHandler}
                    setFollowTC={this.props.setFollowTC}
                    setUnfollowTC={this.props.setUnfollowTC}
                />
            </>
        );
    }
}

// let AuthRedirectComponent = WithAuthRedirect(UsersClassApiComponent)

export const ConnectedUsersContainer = compose(
    connect(mapStateToProps,
        {
            follow, unFollow, setUsers,
            setCurrentPage, setUsersTotalCount, toggleIsFetching,
            toggleIsFollowingInProgress, getUsersTC, setCurrentPageTC,
            setFollowTC, setUnfollowTC
        }),
    WithAuthRedirect
)(UsersClassApiComponent) as React.ComponentType; // Оборачиваем компонент в compose и указываем тип React.ComponentType




