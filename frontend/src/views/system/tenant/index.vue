<template>
  <div>
    <x-card v-if="hasPerm('sysTenant:page')">
      <div slot="content" class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="租户名称">
                <a-input v-model="queryParam.name" allow-clear placeholder="请输入租户名称" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="主机名称">
                <a-input v-model="queryParam.host" allow-clear placeholder="请输入主机名称" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
              <a-button style="margin-left: 8px" @click="() => queryParam = {}">重置</a-button>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </x-card>
    <a-card :bordered="false">
      <s-table
        ref="table"
        :columns="columns"
        :data="loadData"
        :alert="true"
        :rowKey="(record) => record.id"
        :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }">
        <template slot="operator" v-if="hasPerm('sysTenant:add')">
          <a-button @click="$refs.addForm.add()" icon="plus" type="primary" v-if="hasPerm('sysTenant:add')">新增租户
          </a-button>
        </template>
        <span slot="host" slot-scope="host">
          <a-tag :color="'geekblue'">
            {{ host }}
          </a-tag>
        </span>
        <span slot="action" slot-scope="text, record">
          <a v-if="hasPerm('sysTenant:edit')" @click="$refs.editForm.edit(record)">编辑</a>
          <a-divider type="vertical" v-if="hasPerm('sysTenant:edit') & hasPerm('sysTenant:delete')" />
          <a-popconfirm
            v-if="hasPerm('sysTenant:delete')"
            placement="topRight"
            title="确认删除？"
            @confirm="() => sysTenantDelete(record)">
            <a>删除</a>
          </a-popconfirm>
        </span>
      </s-table>
      <add-form ref="addForm" @ok="handleOk" />
      <edit-form ref="editForm" @ok="handleOk" />
    </a-card>
  </div>
</template>
<script>
  import {
    STable,
    Ellipsis,
    XCard
  } from '@/components'
  import {
    sysTenantPage,
    sysTenantDelete
  } from '@/api/modular/system/tenantManage'
  import addForm from './addForm'
  import editForm from './editForm'

  export default {
    components: {
      XCard,
      STable,
      Ellipsis,
      addForm,
      editForm
    },
    data() {
      return {
        // 查询参数
        queryParam: {},
        // 表头
        columns: [{
            title: '租户名称',
            dataIndex: 'name',
            fixed: 'left'
          },
          {
            title: '主机名称',
            dataIndex: 'host',
            sorter: (a, b) => a.name.length - b.name.length,
            scopedSlots: {
              customRender: 'host'
            }
          },
          {
            title: '数据库连接',
            dataIndex: 'connection'
          },
          {
            title: '创建时间',
            dataIndex: 'createdTime'
          },
          {
            title: '电话',
            dataIndex: 'phone'
          },
          {
            title: '邮箱',
            dataIndex: 'email'
          },
          {
            title: '备注',
            dataIndex: 'remark'
          }
          // {
          //   title: '架构',
          //   dataIndex: 'schema',
          //   width: 100
          // },
        ],
        // 加载数据方法 必须为 Promise 对象
        loadData: parameter => {
          return sysTenantPage(Object.assign(parameter, this.queryParam)).then((res) => {
            return res.data
          })
        },
        selectedRowKeys: [],
        selectedRows: []
      }
    },
    created() {
      if (this.hasPerm('sysTenant:edit') || this.hasPerm('sysTenant:delete')) {
        this.columns.push({
          title: '操作',
          width: '150px',
          dataIndex: 'action',
          scopedSlots: {
            customRender: 'action'
          }
        })
      }
    },
    methods: {
      sysTenantDelete(record) {
        sysTenantDelete(record).then((res) => {
          if (res.success) {
            this.$message.success('删除成功')
            this.$refs.table.refresh()
          } else {
            this.$message.error('删除失败：' + res.message)
          }
        }).catch((err) => {
          this.$message.error('删除错误：' + err.message)
        })
      },
      toggleAdvanced() {
        this.advanced = !this.advanced
      },
      handleOk() {
        this.$refs.table.refresh()
      },
      onSelectChange(selectedRowKeys, selectedRows) {
        this.selectedRowKeys = selectedRowKeys
        this.selectedRows = selectedRows
      }
    }
  }
</script>
<style lang="less">
  .table-operator {
    margin-bottom: 18px;
  }

  button {
    margin-right: 8px;
  }
</style>