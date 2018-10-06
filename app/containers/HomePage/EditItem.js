import React, { Component } from 'react';
import { Button, Input, InputNumber } from 'antd';

export default class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.node.id,
      title: props.node.title,
      price: props.node.price,
      ingredients: props.node.ingredients,
    };
  }

  static getDerivedStateFromProps(newProps, prevState) {
    if (newProps.node.id !== prevState.id) {
      return {
        id: newProps.node.id,
        title: newProps.node.title,
        price: newProps.node.price,
        ingredients: newProps.node.ingredients,
      };
    }

    return null;
  }

  onChangeTitle = e => {
    this.setState({
      title: e.target.value,
    });
  };

  onChangePrice = e => {
    this.setState({
      price: e,
    });
  };

  onChangeIngredients = e => {
    this.setState({
      ingredients: e.target.value,
    });
  };

  onSubmit = () => {
    this.props.edit(this.state);
    this.setState({
      title: '',
      price: '',
      ingredients: '',
    });
  };

  render() {
    return (
      <div>
        <Input
          placeholder="Название блюда"
          value={this.state.title}
          onChange={this.onChangeTitle}
        />
        <Input
          placeholder="Ингредиенты"
          value={this.state.ingredients}
          onChange={this.onChangeIngredients}
        />
        <InputNumber
          placeholder="Стоимость в рублях"
          min={0}
          max={10000}
          value={this.state.price}
          onChange={this.onChangePrice}
        />
        <Button onClick={this.onSubmit}>Сохранить</Button>
      </div>
    );
  }
}
