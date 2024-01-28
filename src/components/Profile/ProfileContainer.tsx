import React, {Component} from "react";
import {ProfilePagesType} from "../../reducers/types";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux-store/redux-store";
import {setUserProfileTC} from "../../reducers/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: ProfilePagesType
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage,
    }
}

type mapDispatchToPropsType = {
    setUserProfileTC: (userId: number) => void
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
    }

    render() {
        return (
            <div>
                <Profile state={this.props.profile}/>
            </div>
        )
    }


}


export const ConnectedUserProfileContainer = compose(
    connect(mapStateToProps, { setUserProfileTC }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer) as React.ComponentType; // Оборачиваем компонент в compose и указываем тип React.ComponentType