<template>
  <div class="wrapper">
    <table>
      <tr class="table_header">
        <th class="table_header_column">{{ $t("surname") }}</th>
        <th class="table_header_column">{{ $t("first_name") }}</th>
        <th class="table_header_column">{{ $t("id") }}</th>
        <th class="table_header_column">{{ $t("address") }}</th>
        <th class="table_header_column">{{ $t("birth_date") }}</th>
        <th class="last">
          <el-input
            v-model="search"
            size="mini"
            :placeholder="$t('typeToSearch')"
          />
          <el-button size="mini" @click="handleShow()">{{
            $t("choise")
          }}</el-button>
        </th>
      </tr>
      <tr
        v-for="i in data.filter(
          (data) =>
            !search ||
            data.username.toLowerCase().includes(search.toLowerCase()) ||
            data.first_name.toLowerCase().includes(search.toLowerCase()) ||
            data.last_name.toLowerCase().includes(search.toLowerCase()) ||
            data.location.toLowerCase().includes(search.toLowerCase())
        )"
        :key="i.device_id"
        class="table_row success_row"
        :class="`table_row_${i.device_id}`"
      >
        <th>
          <div style="display: flex; align-items: center">
            <img :src="i.avatar" width="50px" />
            <div
              style="display: flex; flex-direction: column; margin-left: 10px"
            >
              <div>{{ i.last_name }}</div>
              <div class="show_on_mobile">{{ i.first_name }}</div>
              <div class="show_on_mobile">{{ i.location }}</div>
              <div class="show_on_mobile">{{ i.birth_date }}</div>
            </div>
          </div>
        </th>
        <th class="table_header_column">{{ i.first_name }}</th>
        <th class="table_header_column">{{ i.device_id }}</th>
        <th class="table_header_column">{{ i.location }}</th>
        <th class="table_header_column">{{ i.birth_date }}</th>
        <th>
          <!-- <el-checkbox ref="checkbox" :class="'checkbox-'+i.device_id" @change="checked(i)"></el-checkbox> -->
          <input
            type="checkbox"
            ref="checkbox"
            :class="'checkbox-' + i.device_id"
            @change="checked(i)"
          />
        </th>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      chartdata: [1, 2, 3, 4, 5, 6],
      options: [],
      data: [],
      search: "",
      list: [],
      last: [],
      lastCheck: null,
    };
  },
  created() {
    this.getUser();
  },
  mounted() {},
  methods: {
    getUser() {
      let headers = { Authorization: "Token " + sessionStorage.getItem("key") };
      axios.get("users/get/", { headers }).then(
        (r) => {
          for (let i in r.data) {
            r.data[i].avatar =
              "https://back.cardioservice.com.kz/media/" + r.data[i].avatar;
          }
          this.data = r.data;
        },
        (e) => {
          console.log(e);
        }
      );
    },
    checked(item) {
      let a = this.$refs.checkbox;
      let b = `.checkbox-${item.device_id}`;
      if (this.last.includes(b)) {
        const index = this.last.indexOf(item);
        if (index > -1) {
          this.last.splice(index, 1);
          this.list.splice(index, 1);
        }
      } else {
        this.last.push(b);
        this.list.push(item);
      }
      if (this.last.length > 4) {
        document.querySelector(this.last[0]).checked = false;
        this.last = this.last.slice(1, this.last.length);
        this.list = this.list.slice(1, this.list.length);
      }
      // console.log(this.list, this.last);
      this.lastCheck = `.checkbox-${item.device_id}`;
    },
    handleShow() {
      localStorage.setItem("checked", JSON.stringify(this.list));
      // window.location.href = `/home/checked`
      this.$router.push({ name: "checked" });
    },
  },
};
</script>

<style scoped>
.warning-row {
  background: oldlace;
}

.success_row {
  background: #f0f9eb;
}
.wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  height: auto;
}
table {
  width: 100%;
  border-spacing: 0;
}
.table_header {
  /* position: fixed; */
}

tr,
th {
  padding: 10px;
  color: #606266;
}
th {
  border-bottom: 1px solid #dddddd;
}
tr:first-child th {
  color: #909399;
}
.sectionAva img {
  width: 60px;
  height: 60px;
  border-radius: 5px;
}
.sectionAva {
  margin: 0 5px;
}
.show_on_mobile {
  display: none;
}
.last {
  display: flex;
}
.last input {
  width: 100px;
}
@media (max-width: 800px) {
  .info {
    font-size: 0.8em;
  }
  .table_header_column {
    display: none;
  }
  .show_on_mobile {
    display: block;
  }
  th {
    font-size: 0.9em;
  }
}
@media (max-width: 800px) {
  th {
    font-size: 0.8em;
  }
}
</style>