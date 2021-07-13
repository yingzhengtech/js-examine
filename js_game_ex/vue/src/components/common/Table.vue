<template>
    
  <div class="container">
        
    <div class="list">
          
      <div class="list_info">
              <!-- 公司 -->
              
        <div
          class="list_info_btn"
          v-for="(item, index) in list"
          :key="index"
          @click="btn(index)"
        >
                  {{ item }}       
        </div>
            
      </div>
          
      <div class="list_info">
              <span class="demonstration">默认</span>       <el-date-picker
          v-model="date"
          type="date"
          
          placeholder="选择日期"
        >
                </el-date-picker
        >
            
      </div>
      <!-- 业绩报表 -->
      <div>
            <el-table
          :data="tableData1"
          border
          style="width: 100%"
          height="400"
        >
                <el-table-column fixed prop="date" label="日期" width="150">
                  </el-table-column
          >
                <el-table-column prop="name" label="姓名" width="120"
            > </el-table-column
          >
                <el-table-column prop="province" label="省份" width="120">
                  </el-table-column
          >
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >查看</el-button
              >
                      </template
            >
                  </el-table-column
          >
              </el-table
        >
            
      </div>
    </div>
    <!-- 历史业绩报表 -->
    <div>
            <el-table
        :data="tableData"
        border
        height="200"
        :summary-method="getSummaries"
        show-summary
      >
                <el-table-column prop="id" label="ID" width="180"
          > </el-table-column
        >
                <el-table-column prop="name" label="姓名"> </el-table-column>
                <el-table-column prop="amount1" label="数值 1（元）"
          > </el-table-column
        >
                <el-table-column prop="amount2" label="数值 2（元）"
          > </el-table-column
        >
                <el-table-column prop="amount3" label="数值 3（元）"
          > </el-table-column
        >
              </el-table
      >
    </div>
      
  </div>
</template>
<script>
// import { getTimeDay } from "../utils/date";
export default {
  data() {
    return {
      date: "",
      curlIndex: 0,
      list: ["分公司a", "分公司b", "分公司c"],

      tableData1: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
        },
      ],
      tableData: [
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
      ],
    };
  },
  methods: {
    // getTimeDay,
    handleClick(row) {
      console.log(row);
    },
    btn(index) {
      this.curlIndex = index;
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总价";
          return;
        }
        const values = data.map((item) => Number(item[column.property]));
        if (!values.every((value) => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              returnprev;
            }
          }, 0);
          sums[index] += " 元";
        } else {
          sums[index] = "N/A";
        }
      });

      return sums;
    },
  },
};
</script>
