import {observable, action} from 'mobx';

import { getBlogList } from 'api';

class EssayListStore {
    @observable essayType = '';
    @observable essayList = [];

    @action setEssayType = (essayType) => {
      this.essayType = essayType
    }

    @action getEssayList = async () => {
      try {
        let res = await getBlogList({
          type: this.essayType
        })
        // console.log(2222, this.essayType)
        this.essayList = res.data.blogList || []
      } catch (error) {
        this.essayList = []
      }
    }

    @action setEssayList = async (list = []) => {
      this.essayList = list
    }
}

export const essayListStore = new EssayListStore();