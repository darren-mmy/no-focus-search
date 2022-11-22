<template>
    <div v-show="isShow" class="noFocusSearch">
        <div class="main" ref="main">
            <div class="inputBox">
                <input ref="search" class="search" type="text" v-model="searchValue" @input="inputChange" />
            </div>
            <p class="noData" v-if="firstSearch && !filterData.length">{{ noData }}</p>
            <template v-else>
                <ul class="dataList">
                    <li class="dataItem" v-for="(item, i) in filterData" :key="i" @click="checkItem(item)">{{ item.name }}
                    </li>
                </ul>
            </template>
        </div>
    </div>
</template>
<script>
import { debounce } from '../common/index';
export default {
    props: {
        dataList: {
            type: Array,
            default: []
        },
        noData: {
            type: String,
            default: '无匹配结果'
        }
    },
    computed: {
    },
    data() {
        return {
            isShow: false,
            searchValue: '',
            filterData: [],
            firstSearch: false
        }
    },
    mounted() {
        window.addEventListener('keydown', this.onKeyDown)
        document.addEventListener("click", this.bodyCloseMenus);
    },
    methods: {
        bodyCloseMenus(e) {
            let self = this;
            if (this.$refs.main && !this.$refs.main.contains(e.target)) {
                if (self.isShow == true) {
                    self.isShow = false;
                }
            }
        },
        checkItem(item) {
            this.isShow = false
            this.$emit('checkItem', item)
        },
        inputChange: debounce(function () {
            let str = this.searchValue.replace(/[^\w]$/gi, '')
            this.filterData = this.dataList.filter(item => {
                return item.name.indexOf(str) > -1
            })
            this.$emit('getInput', str)
            if (!this.firstSearch) { this.firstSearch = true }
        }),
        onKeyDown(e) {
            if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90)) {
                if (!this.isShow) {
                    this.isShow = true
                    this.searchValue = e.key
                    setTimeout(() => {
                        this.$refs['search'].focus()
                    }, 0);
                    this.inputChange()
                }
            }
        }
    },
    beforeDestroy() {
        document.removeEventListener("click", this.bodyCloseMenus);
        window.removeEventListener('keydown', this.onKeyDown)
    },
}
</script>
<style lang="scss" scoped>
.noFocusSearch {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 10px;

    .main {
        width: 500px;

        .inputBox {
            width: 500px;
            input {
                width: 100%;
                height: 48px;
                line-height: 48px;
                border-radius: 6px;
                font-size: 16px;
                padding: 0 14px;
            }
        }

        .noData {
            font-size: 16px;
            margin-top: 10px;
        }

        .dataList {
            margin-top: 10px;
            width: 500px;
            height: 380px;
            overflow-y: auto;

            .dataItem {
                border-radius: 6px;
                font-size: 16px;
                cursor: pointer;
                text-align: left;
                padding: 10px 14px;
                &:hover {
                    background: #f5f7fa;
                }
            }

            &::-webkit-scrollbar {
                width: 8px;
                height: 16px;
                background-color: #F5F5F5;
            }

            /*定义滚动条轨道 内阴影+圆角*/
            &::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                border-radius: 10px;
                background-color: #F5F5F5;

            }

            /*定义滑块 内阴影+圆角*/
            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
                background-color: #555;
            }

        }

    }

}

@media screen and (max-width: 768px) {
    .noFocusSearch {
        .main {
            width: 100%;

            .inputBox {
                width: 100%;

                input {
                    width: 100%;
                }
            }

            .noData {}

            .dataList {
                width: 100%;

                .dataItem {
                    &:hover {}
                }
            }
        }

    }
}
</style>
