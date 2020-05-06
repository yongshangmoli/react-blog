import {observable, action} from 'mobx';

import { getBlogList } from 'api';
import { tabsConfig } from 'config/body';

let pageInfos = {}
tabsConfig.map(v =>
  pageInfos[v.key] = {
    page: 1,
    pageSize: 10,
    total: 1
  }
)

class EssayListStore {
    @observable essayType = '';
    @observable essayList = [];
    @observable pageInfo = pageInfos

    @action setEssayType = (essayType) => {
      this.essayType = essayType
    }

    @action getEssayList = async () => {
      try {
        let res = await getBlogList({
          type: this.essayType,
          page: this.pageInfo[this.essayType].page,
          pageSize: this.pageInfo[this.essayType].pageSize,
        })
        this.essayList = res.data.blogList || []
        let { page, pageSize, count } = res.data
        this.updatePageInfo({
          page,
          pageSize,
          total: count
        })
      } catch (error) {
        this.essayList = []
      }
    }

    @action setEssayList = async (list = []) => {
      this.essayList = list
    }

    @action updatePageInfo({page, pageSize, total}) {
      if (!this.essayType) return

      this.pageInfo[this.essayType] = {
        page: page || 1,
        pageSize: pageSize || 10,
        total: total || 1
      }
    }
}

export const essayListStore = new EssayListStore();