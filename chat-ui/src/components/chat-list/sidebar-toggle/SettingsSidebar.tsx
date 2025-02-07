import {
  CloseButton,
  Container,
  Divider,
  Header,
  SettingItemContainer,
} from "../../../styled-components/settings";
import { AccountMenu } from "../settings/AccountMenu";
import { ChatMenu } from "../settings/ChatMenu";
import { HelpMenu } from "../settings/HelpMenu";
import { UserCardSetting } from "../settings/UserCardSetting";

export const SettingsSidebar = () => {
  return (
    <Container>
      <Header>
        <h2>Settings</h2>
        <CloseButton>&times;</CloseButton>
      </Header>
      <UserCardSetting />
      <Divider />
      <SettingItemContainer>
        <AccountMenu />
        <Divider />
        <ChatMenu />
        <Divider />
        <HelpMenu />
      </SettingItemContainer>
    </Container>
  );
};
