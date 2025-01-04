import { FlatList, StyleSheet, Text, View } from "react-native";

const AllItems = ({ data }) => {
    return (
        <View>
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Text>Item</Text>
                <Text>Stock (KG)</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.Item}>
                        <Text>{item.name}</Text>
                        <Text>{item.stock}</Text>
                    </View>
                )}
                style={{
                    marginTop: "20px",
                }}
            />
        </View>
    );
};

export default AllItems;

const styles = StyleSheet.create({
    Item: {
        padding: "3%",
        backgroundColor: "#dadada",
        borderRadius: 3,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: "6px",
    },
});
