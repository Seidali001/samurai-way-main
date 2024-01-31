import React, {Component} from "react";
import {ProfilePagesType} from "../../reducers/types";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux-store/redux-store";
import {getUserProfileStatusTC, updateUserProfileStatusTC, setUserProfileTC} from "../../reducers/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: ProfilePagesType
    status: string
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage,
        status: state.profilePage.status
    }
}

type mapDispatchToPropsType = {
    setUserProfileTC: (userId: number) => void
    getUserProfileStatusTC: (userId: number) => void
    updateUserProfileStatusTC: (status: string) => void
}

export type ComponentWithRouterPropsType = mapStateToPropsType & mapDispatchToPropsType

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & ComponentWithRouterPropsType

class ProfileContainer extends Component<ProfileContainerPropsType> {
    constructor(props: ProfileContainerPropsType) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.setUserProfileTC(userId)
        this.props.getUserProfileStatusTC(userId)
    }

    /*componentDidUpdate() {
this.props.setUserProfileStatusTC("hello !!!")
    }*/

    render() {
        return (
            <div>
                <Profile state={this.props.profile} status={this.props.status} updateUserProfileStatusTC={this.props.updateUserProfileStatusTC}/>
            </div>
        )
    }


}


export const ConnectedUserProfileContainer = compose(
    connect(mapStateToProps, { setUserProfileTC, getUserProfileStatusTC, updateUserProfileStatusTC }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer) as React.ComponentType; // Оборачиваем компонент в compose и указываем тип React.ComponentType