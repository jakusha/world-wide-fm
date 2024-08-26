import { NavigatorScreenParams } from "@react-navigation/native"

export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>;
    AppDashBoard: NavigatorScreenParams<DashBoardStackParamList>;
}

export type AuthStackParamList = {
    Onboarding: undefined;
    Login: undefined;
    Signup: undefined;
}

export type DashBoardStackParamList = {
    Dashboard: undefined;
    AppHome: undefined;
    Favorite: undefined;
    Profile: undefined;
    History: undefined;
    StationInfo: undefined;
    CountryList: undefined;
}
