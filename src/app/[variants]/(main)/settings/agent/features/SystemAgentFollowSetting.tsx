\'use client\';

import { Form, type FormGroupItemType, Icon, Skeleton } from '@lobehub/ui';
import { Switch } from 'antd';
import { Loader2Icon } from 'lucide-react';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FORM_STYLE } from '@/const/layoutTokens';
import { useUserStore } from '@/store/user';
import { settingsSelectors } from '@/store/user/selectors';

const SystemAgentFollowSetting = memo(() => {
  const { t } = useTranslation('setting');
  const [form] = Form.useForm();
  const followSystem = useUserStore(settingsSelectors.systemAgentFollowSystem);
  const [updateSystemAgentFollowSystem, isUserStateInit] = useUserStore((s) => [
    s.updateSystemAgentFollowSystem,
    s.isUserStateInit,
  ]);
  const [loading, setLoading] = useState(false);

  if (!isUserStateInit) return <Skeleton active paragraph={{ rows: 2 }} title={false} />;

  const followSystemSettings: FormGroupItemType = {
    children: [
      {
        children: <Switch />,
        desc: t('systemAgent.followSystem.desc'),
        label: t('systemAgent.followSystem.title'),
        layout: 'horizontal',
        minWidth: undefined,
        name: 'followSystem',
        valuePropName: 'checked',
      },
    ],
    extra: loading && <Icon icon={Loader2Icon} size={16} spin style={{ opacity: 0.5 }} />,
    title: t('systemAgent.followSystem.group'),
  };

  return (
    <Form
      collapsible={false}
      form={form}
      initialValues={{ followSystem }}
      items={[followSystemSettings]}
      itemsType={'group'}
      onValuesChange={async (values) => {
        setLoading(true);
        await updateSystemAgentFollowSystem(!!values.followSystem);
        setLoading(false);
      }}
      variant={'filled'}
      {...FORM_STYLE}
    />
  );
});

export default SystemAgentFollowSetting;
