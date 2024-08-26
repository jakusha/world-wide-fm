import { Screen } from "@shared/Screen";
import { FlatList, Pressable, Text, View } from "react-native";
import RadioItem from "./components/RadioItem";
import { raioStations } from "@data/index";
import { SVGIcon } from "@shared/SVGIcon";
import { StackScreenProps } from "@react-navigation/stack";
import { DashBoardStackParamList } from "src/types";
import { DrawerActions } from "@react-navigation/native";
import StationControls from "./components/StationControls";

type ScreenProps = StackScreenProps<DashBoardStackParamList, "AppHome">;
const Home = ({ navigation }: ScreenProps) => {
  return (
    <Screen>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <SVGIcon name="expand" />
        </Pressable>

        <Pressable onPress={()=> navigation.navigate('CountryList')}>
          <SVGIcon name="search" />
        </Pressable>
      </View>

      <View>
        <StationControls />
      </View>
      <View style={{ marginTop: 16 }}>
        <FlatList
          numColumns={2}
          data={raioStations}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <RadioItem item={item} navigation={navigation} />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          columnWrapperStyle={{ gap: 10 }}
        />
      </View>

    </Screen>
  );
};

export default Home;
