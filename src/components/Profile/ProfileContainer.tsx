import React, {Component} from "react";
import {ProfilePagesType} from "../../reducers/types";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux-store/redux-store";
import {Dispatch} from "redux";
import {ServerUserProfileType, setUserProfileTC, setUsersProfileAC} from "../../reducers/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileApi} from "../../api/profile";

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
    /*setUserProfile: (profile: ServerUserProfileType) => void*/
    setUserProfileTC: (userId: number) => void
}

/*const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUserProfile: (profile: ServerUserProfileType) => {
            dispatch(setUsersProfileAC(profile))
        }
    }
}*/

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


export default ProfileContainer;

let ComponentWithRouter = withRouter(ProfileContainer)


export const ConnectedUserProfileContainer = connect(mapStateToProps,  {
    setUserProfileTC
})(ComponentWithRouter)