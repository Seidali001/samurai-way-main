import React, {Component} from "react";
import {ProfilePagesType} from "../../reducers/types";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux-store/redux-store";
import {Dispatch} from "redux";
import {ServerUserProfileType, setUsersProfileAC} from "../../reducers/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

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
    setUserProfile: (profile: ServerUserProfileType) => void
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUserProfile: (profile: ServerUserProfileType) => {
            dispatch(setUsersProfileAC(profile))
        }
    }
}

export type ComponentWithRouterPropsType = mapStateToPropsType & mapDispatchToPropsType

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & ComponentWithRouterPropsType

class ProfileContainer extends Component<ProfileContainerPropsType> {
    constructor(props: ProfileContainerPropsType) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                // this.props.toggleIsFetchingCallback(false)
                // console.log(typeof res.data)
                this.props.setUserProfile(res.data);
                // debugger
                //   this.props.setUsersTotalCountCallback(res.data.totalCount)
            })
            .catch(error => {
                // this.props.toggleIsFetchingCallback(false)

                console.error("Error fetching users:", error);
            });
    }

    render() {
        return (
            <div>
                <Profile state={this.props.profile}/>
                {/* <ProfileInfo/>
            <MyPostsContainer profilePages={this.props.state}/>*/}
            </div>
        )
    }


}


export default ProfileContainer;

let ComponentWithRouter = withRouter(ProfileContainer)


export const ConnectedUserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ComponentWithRouter)