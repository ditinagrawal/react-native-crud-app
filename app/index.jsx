import AddItem from "@/components/AddItem";
import AllItems from "@/components/AllItems";
import { useState } from "react";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const mockData = [
    {
        id: 1,
        name: "Wheat",
        stock: 25,
    },
    {
        id: 2,
        name: "Rice",
        stock: 5,
    },
];

const Home = () => {
    const [activeBtn, setActiveBtn] = useState(0);
    const [data, setData] = useState(mockData);
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View style={styles.Flex}>
                <Image
                    source={require("../assets/images/react-logo.png")}
                    style={{ width: 50, height: 50 }}
                />
                <Text style={styles.Text}>Crud App</Text>
            </View>
            <View style={[styles.Flex, { gap: "10%" }]}>
                <Pressable
                    style={activeBtn == 0 && styles.Button}
                    onPress={() => setActiveBtn(0)}
                >
                    <Text style={activeBtn == 0 && styles.ButtonText}>
                        All Items
                    </Text>
                </Pressable>
                <Pressable
                    style={activeBtn == 1 && styles.Button}
                    onPress={() => setActiveBtn(1)}
                >
                    <Text style={activeBtn == 1 && styles.ButtonText}>
                        Low Stock
                    </Text>
                </Pressable>
                <Pressable
                    style={activeBtn == 2 && styles.Button}
                    onPress={() => setActiveBtn(2)}
                >
                    <Text style={activeBtn == 2 && styles.ButtonText}>
                        Add Item
                    </Text>
                </Pressable>
            </View>
            <View style={styles.ListContainer}>
                {activeBtn == 0 && <AllItems data={data} />}
                {activeBtn == 1 && (
                    <AllItems data={data.filter((item) => item.stock < 10)} />
                )}
                {activeBtn == 2 && <AddItem data={data} setData={setData} />}
            </View>
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    Flex: {
        paddingVertical: "5%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "3%",
    },
    Text: {
        color: "#444",
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    Button: {
        paddingVertical: "1.5%",
        paddingHorizontal: "3.5%",
        backgroundColor: "#888",
        borderRadius: 4,
    },
    ButtonText: {
        color: "#fff",
        fontWeight: "500",
    },
    ListContainer: {
        padding: "5%",
    },
});
