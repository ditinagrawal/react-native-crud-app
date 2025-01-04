import React, { useState } from "react";
import {
    Alert,
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

const AddItem = ({ data, setData }) => {
    const [name, setName] = useState("");
    const [stock, setStock] = useState("");
    const [editingId, setEditingId] = useState(null);

    const handlePress = () => {
        if (!name || !stock) {
            Alert.alert("Fields are empty!!");
            return;
        }

        if (editingId) {
            // Update existing item
            setData(
                data.map((item) =>
                    item.id === editingId ? { ...item, name, stock } : item
                )
            );
            setEditingId(null);
        } else {
            // Add new item
            setData([...data, { id: Date.now(), name, stock }]);
        }

        setName("");
        setStock("");
    };

    const handleEdit = (item) => {
        setName(item.name);
        setStock(item.stock.toString());
        setEditingId(item.id);
    };

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    return (
        <View>
            <View style={{ flex: 1, flexDirection: "column", gap: 10 }}>
                <TextInput
                    placeholder="Name"
                    style={styles.Input}
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    keyboardType="number-pad"
                    placeholder="Stock (KG)"
                    style={styles.Input}
                    value={stock}
                    onChangeText={setStock}
                />
                <Pressable style={styles.Button} onPress={handlePress}>
                    <Text style={styles.ButtonText}>
                        {editingId ? "Update Item" : "Add Item"}
                    </Text>
                </Pressable>
            </View>
            <View style={{ marginTop: 30 }}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.Item}>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginRight: "20px",
                                }}
                            >
                                <Text>{item.name}</Text>
                                <Text>{item.stock}</Text>
                            </View>
                            <View style={styles.ActionButtons}>
                                <Pressable
                                    style={[
                                        styles.ActionButton,
                                        styles.EditButton,
                                    ]}
                                    onPress={() => handleEdit(item)}
                                >
                                    <Text style={styles.ButtonText}>Edit</Text>
                                </Pressable>
                                <Pressable
                                    style={[
                                        styles.ActionButton,
                                        styles.DeleteButton,
                                    ]}
                                    onPress={() => handleDelete(item.id)}
                                >
                                    <Text style={styles.ButtonText}>
                                        Delete
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    )}
                    style={{
                        marginTop: 20,
                    }}
                />
            </View>
        </View>
    );
};

export default AddItem;

const styles = StyleSheet.create({
    Input: {
        padding: "2%",
        borderColor: "#111",
        borderWidth: 1,
        borderRadius: 3,
    },
    Button: {
        paddingVertical: "1.5%",
        paddingHorizontal: "3.5%",
        backgroundColor: "#888",
        borderRadius: 4,
    },
    ButtonText: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "500",
    },
    Item: {
        padding: "3%",
        backgroundColor: "#dadada",
        borderRadius: 3,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 6,
        alignItems: "center",
    },
    ActionButtons: {
        flexDirection: "row",
        gap: 8,
    },
    ActionButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 4,
    },
    EditButton: {
        backgroundColor: "#4CAF50",
    },
    DeleteButton: {
        backgroundColor: "#f44336",
    },
});
