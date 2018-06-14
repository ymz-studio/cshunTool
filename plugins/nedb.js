// 嵌入式数据库
import Vue from 'vue';
import nedb from 'nedb-promise';
const db = new nedb();
// mock
db.insert([
	{ title: '测试', detail: '详细信息1', group: '什么组', src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNzAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5kcmFnSXRlbTE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iNzAiIGhlaWdodD0iNTAiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJkcmFnSXRlbTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJSZWN0YW5nbGUiPgogICAgICAgICAgICA8dXNlIGZpbGw9IiM1MUI4ODIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDxyZWN0IHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI1IiB4PSIyLjUiIHk9IjIuNSIgd2lkdGg9IjY1IiBoZWlnaHQ9IjQ1Ij48L3JlY3Q+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=' },
	{ title: '测试', detail: '详细信息2', group: '什么组', src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNzAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5kcmFnSXRlbTI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iNzAiIGhlaWdodD0iNTAiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJkcmFnSXRlbTIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJSZWN0YW5nbGUtQ29weSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzNEODBENCIgZmlsbC1ydWxlPSJldmVub2RkIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgPHJlY3Qgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjUiIHg9IjIuNSIgeT0iMi41IiB3aWR0aD0iNjUiIGhlaWdodD0iNDUiPjwvcmVjdD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==' },
	{ title: '测试', detail: '详细信息3', group: '什么组', src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNzAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5kcmFnSXRlbTM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iNzAiIGhlaWdodD0iNTAiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJkcmFnSXRlbTMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJSZWN0YW5nbGUtQ29weS0yIj4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRTA1NzJBIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iNSIgeD0iMi41IiB5PSIyLjUiIHdpZHRoPSI2NSIgaGVpZ2h0PSI0NSI+PC9yZWN0PgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+' },
	{ title: '测试', detail: '详细信息4', group: '什么什么组', src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNzAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5kcmFnSXRlbTQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iNzAiIGhlaWdodD0iNTAiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJkcmFnSXRlbTQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJSZWN0YW5nbGUtQ29weS0zIj4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRjhFNzFDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iNSIgeD0iMi41IiB5PSIyLjUiIHdpZHRoPSI2NSIgaGVpZ2h0PSI0NSI+PC9yZWN0PgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+' },
	{ title: '测试', detail: '详细信息5', group: '什么什么组', src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNzAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5kcmFnSXRlbTU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iNzAiIGhlaWdodD0iNTAiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJkcmFnSXRlbTUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJSZWN0YW5nbGUtQ29weS0zIj4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRjhFNzFDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiNGRjAwMDAiIHN0cm9rZS13aWR0aD0iNSIgeD0iMi41IiB5PSIyLjUiIHdpZHRoPSI2NSIgaGVpZ2h0PSI0NSI+PC9yZWN0PgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+' },
	{ title: '测试', detail: '详细信息6', group: '什么什么组', src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNzAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5kcmFnSXRlbTY8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iNzAiIGhlaWdodD0iNTAiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJkcmFnSXRlbTYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJSZWN0YW5nbGUtQ29weS0zIj4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRjhFNzFDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiM0QTkwRTIiIHN0cm9rZS13aWR0aD0iNSIgeD0iMi41IiB5PSIyLjUiIHdpZHRoPSI2NSIgaGVpZ2h0PSI0NSI+PC9yZWN0PgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+' }
]);

Vue.prototype.$db = db;

export default db;