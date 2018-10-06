import React, { Component } from 'react';
import { Button, Input, InputNumber } from 'antd';

export default class AddItem extends Component {
  state = {
    title: '',
    price: '',
    ingredients: '',
  };

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
    this.props.add(this.state);
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
