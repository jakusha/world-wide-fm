import { StackScreenProps } from "@react-navigation/stack";
import Header from "@shared/Header";
import { Screen } from "@shared/Screen";
import theme from "@themes/index";
import { DashBoardStackParamList } from "src/types";
import { wp } from "@utils/responsive-design";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { countryList } from "@data/index";
import { SVGIcon } from "@shared/SVGIcon";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@design-system/Input";
import { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import FuzzySearch from 'fuzzy-search';

type ScreenProps = StackScreenProps<DashBoardStackParamList, "CountryList">;

interface SearchItem {
  name: string;
  iso_3166_1: string;
  stationcount: number;
}

interface FormData {
  search: string;
}

const schema = yup.object().shape({
  search: yup.string().required("search is required"),
});

const CountryList = ({ navigation }: ScreenProps) => {
  const { control, watch, setValue } = useForm<FormData>({
    defaultValues: { search: "" },
    resolver: yupResolver(schema),
    mode: "all",
  });
  const { search } = watch();

  const [searches, setSearches] = useState<SearchItem[]>([]);

  useEffect(() => {
    setSearches(countryList);
  }, []);

  const searchCountries = (text: string) => {

    setValue("search", text);
    if (text.length > 0) {
        const searcher = new FuzzySearch(countryList, ['name'], {
          caseSensitive: false,
        });
  
        const result = searcher.search(text);
        setSearches(result as any);
      } else {
        setSearches(countryList);
      }
  };

  return (
    <Screen>
      <Header backBtnFn={() => navigation.goBack()} />
      <View>
        <Text style={styles.countryHeader}>
          Choose <Text style={{ color: theme.colors.GREY_400 }}>Country</Text>
        </Text>
      </View>

      <View style={{ marginVertical: 8 }}>
        <Input
          control={control}
          placeholder="enter country...."
          inputBodycontainer={{
            borderWidth: 0,
            backgroundColor: theme.colors.GREY_300,
          }}
          name="search"
          value={search}
          hasBtn
          isSearch
          onChangeText={(search: string) => searchCountries(search)}
        />
      </View>
      <View style={{ flex: 1 }}>
        <FlashList
          data={searches}
          estimatedItemSize={400}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          renderItem={({ item }) => (
            <Pressable
              style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
            >
              <View style={styles.countryTxtCountCont}>
                <View style={styles.txtPlacement}>
                  <Text style={{ color: theme.colors.GREY_400 }}>
                    ({item.stationcount})
                  </Text>
                </View>
                <Text style={styles.countryTxt}>{item.name}</Text>
              </View>
              <SVGIcon name="arrowUpRight" />
            </Pressable>
          )}
        />
      </View>
    </Screen>
  );
};

export default CountryList;

const styles = StyleSheet.create({
  countryHeader: {
    ...theme.typography.bodySemiBold,
    fontSize: wp(32),
  },
  countryTxtCountCont: {
    position: "relative",
    alignSelf: "flex-start",
  },
  countryTxt: {
    color: theme.colors.BLACK,
    ...theme.typography.bodySemiBold,
    fontSize: wp(32),
  },
  txtPlacement: {
    position: "absolute",
    top: -8,
    right: -8,
  },
});
