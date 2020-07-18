import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../../constants/Colors";

const Task = ({
  item,
  deleteItem,
  editItem,
  isEditing,
  editItemDetail,
  saveEditItem,
  handleEditChange,
  itemChecked,
  itemUnchecked,
  checkedItems,
}) => {
  const checked = checkedItems.filter(
    checkedItem => checkedItem.id === item.id,
  );
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.iconView}>
        {checkedItems.id === item.id ? (
          <Icon
            name="check-circle"
            style={styles.iconView}
            size={30}
            color={Colors.iconColor}
            onPress={() => {
              itemUnchecked(item.id, item.text)
            }}
          />
        ) : (
          <Icon
            name="circle"
            style={styles.iconView}
            size={30}
            color={Colors.iconColor}
            onPress={() => {
              itemChecked(item.id, item.text)   
            }}
          />
        )}
      </View>

      <View style={styles.listItemContainer}>
        <View style={styles.listItemView}>
          {isEditing && editItemDetail.id === item.id ? (
            <TextInput
              placeholder="Edit Item..."
              style={styles.editItemInput}
              onChangeText={handleEditChange}
            />
          ) : (
            <Text
              onPress={() => editItem(item.id, item.text)}
              // maybe can call saveEditItem here ??
              style={
                checkedItems.id === item.id ? styles.checkedItemText : styles.listItemText
              }
              >
              {item.text}
            </Text>
          )}
          </View>
        </View>

      <View style={styles.iconView}>
        {isEditing && editItemDetail.id === item.id ? (
          <Icon
            name="save"
            size={20}
            color="green"
            onPress={() => saveEditItem(item.id, item.text)}
          />
        ) : (
          !checked.length
        )}
        <Icon
          name="remove"
          style={styles.iconView}
          size={25}
          color="#fa867e"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: Colors.taskBackground,
    borderBottomWidth: 1,
    borderColor: Colors.taskBorder,
    flexShrink: 0,
    flexWrap: "nowrap",
    flexDirection: "row",
  },
  listItemContainer: {
    flex: 13,
  },
  listItemView: {
    justifyContent: "space-between",
  },
  listItemText: {
    fontSize: 18,
    alignSelf: "flex-start",
    paddingLeft: 15,
  },
  checkedItemText: {
    fontSize: 18,
    textDecorationLine: "line-through",
    color: "grey",
    paddingLeft: 15,
  },
  iconView: {
    justifyContent: "space-evenly",
    flex: 1,
  },
  editItemInput: {
    padding: 0,
    fontSize: 18,
  },
});

export default Task;
