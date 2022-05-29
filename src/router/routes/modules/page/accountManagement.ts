// 账户管理相关路由
import type { AppRouteModule } from '/@/router/types';
import { getParentLayout, LAYOUT } from '/@/router/constant';

const charts: AppRouteModule = {
  path: '/accountManagement',
  name: 'AccountManagement',
  component: LAYOUT,
  redirect: '/accountManagement/institutionManagement',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: '账户管理',
  },
  children: [
    {
      path: 'institutionManagement',
      name: 'InstitutionManagement',
      meta: {
        title: '合作金融机构管理',
      },
      component: getParentLayout('InstitutionManagement'),
      redirect: '/accountManagement/institutionManagement/listManagement',
      children: [
        {
          path: 'listManagement',
          name: 'ListManagement',
          component: getParentLayout('ListManagement'),
          redirect: '/accountManagement/institutionManagement/listManagement/list',
          meta: {
            title: '合作金融机构名单管理',
          },
          children: [
            {
              path: 'list',
              name: 'List',
              component: () =>
                import('/@/views/accountManagement/institutionManagement/listManagement/List.vue'),
              meta: {
                title: '总部定期导入合作金融机构名单',
              },
            },
            {
              path: 'report',
              name: 'Report',
              component: () =>
                import(
                  '/@/views/accountManagement/institutionManagement/listManagement/report.vue'
                ),
              meta: {
                title: '合作金融机构报备',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default charts;
