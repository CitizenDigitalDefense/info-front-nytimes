import { observable, action } from "mobx";
import axios from 'axios';
import { isProduction } from '../utils/constants';

export default class ToolState {
  @observable stories;
  @observable story;

  constructor() {
    this.stories = [];
    this.story = {};
  }

  async fetchData(path) {
    const params = {
      source: 'fox',
      slug: path,
    };
    let uri = 'https://info-front-api.herokuapp.com/stories';
    const { data } = await axios.get(uri, { params });
    data.slug ? this.setSingle(data) : this.setData(data);
  }

  @action setSingle(data) {
    this.story = data;
  }

  @action clearItems() {
    this.stories = [];
    this.story = {};
  }
}
