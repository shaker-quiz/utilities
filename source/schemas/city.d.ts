export namespace CitySchema {
    namespace address {
        let type: "String";
        let minLength: 1;
        let maxLength: 255;
    }
    namespace alias {
        let type_1: "String";
        export { type_1 as type };
        let minLength_1: 1;
        export { minLength_1 as minLength };
        let maxLength_1: 255;
        export { maxLength_1 as maxLength };
    }
    namespace chatapp_category {
        let type_2: "String";
        export { type_2 as type };
    }
    namespace chatapp_legacy {
        let type_3: "Boolean";
        export { type_3 as type };
    }
    namespace chatapp_line {
        let type_4: "String";
        export { type_4 as type };
        let minLength_2: 1;
        export { minLength_2 as minLength };
        let maxLength_2: 255;
        export { maxLength_2 as maxLength };
    }
    namespace chatapp_tag {
        let type_5: "String";
        export { type_5 as type };
        let minLength_3: 1;
        export { minLength_3 as minLength };
        let maxLength_3: 255;
        export { maxLength_3 as maxLength };
    }
    namespace chatapp_user {
        let type_6: "String";
        export { type_6 as type };
        let minLength_4: 1;
        export { minLength_4 as minLength };
        let maxLength_4: 255;
        export { maxLength_4 as maxLength };
    }
    namespace country {
        let type_7: "String";
        export { type_7 as type };
        let minLength_5: 2;
        export { minLength_5 as minLength };
        let maxLength_5: 2;
        export { maxLength_5 as maxLength };
    }
    namespace currency {
        let type_8: "String";
        export { type_8 as type };
        let minLength_6: 3;
        export { minLength_6 as minLength };
        let maxLength_6: 3;
        export { maxLength_6 as maxLength };
    }
    namespace custom_html {
        let type_9: "String";
        export { type_9 as type };
    }
    namespace custom_script {
        let type_10: "String";
        export { type_10 as type };
    }
    namespace description {
        let type_11: "String";
        export { type_11 as type };
        let minLength_7: 1;
        export { minLength_7 as minLength };
        let maxLength_7: 255;
        export { maxLength_7 as maxLength };
    }
    namespace email {
        let type_12: "String";
        export { type_12 as type };
        let minLength_8: 1;
        export { minLength_8 as minLength };
        let maxLength_8: 255;
        export { maxLength_8 as maxLength };
        export let format: "email";
    }
    namespace game_time {
        let type_13: "String";
        export { type_13 as type };
        let format_1: "time";
        export { format_1 as format };
    }
    namespace id {
        let type_14: "String";
        export { type_14 as type };
        let format_2: "uuid";
        export { format_2 as format };
    }
    namespace inst_comment {
        let type_15: "String";
        export { type_15 as type };
        export let deprecated: true;
    }
    namespace inst_link {
        let type_16: "String";
        export { type_16 as type };
        let deprecated_1: true;
        export { deprecated_1 as deprecated };
    }
    namespace inst_login {
        let type_17: "String";
        export { type_17 as type };
        let deprecated_2: true;
        export { deprecated_2 as deprecated };
    }
    namespace inst_password {
        let type_18: "String";
        export { type_18 as type };
        let deprecated_3: true;
        export { deprecated_3 as deprecated };
    }
    namespace is_default {
        let type_19: "Boolean";
        export { type_19 as type };
    }
    namespace is_franchise {
        let type_20: "Boolean";
        export { type_20 as type };
    }
    namespace max_members_count {
        let type_21: "Number";
        export { type_21 as type };
        let format_3: "integer";
        export { format_3 as format };
    }
    namespace meta_description {
        let type_22: "String";
        export { type_22 as type };
        let minLength_9: 1;
        export { minLength_9 as minLength };
        let maxLength_9: 255;
        export { maxLength_9 as maxLength };
    }
    namespace meta_title {
        let type_23: "String";
        export { type_23 as type };
        let minLength_10: 1;
        export { minLength_10 as minLength };
        let maxLength_10: 255;
        export { maxLength_10 as maxLength };
    }
    namespace min_members_count {
        let type_24: "Number";
        export { type_24 as type };
        let format_4: "integer";
        export { format_4 as format };
    }
    namespace name {
        let type_25: "String";
        export { type_25 as type };
        let minLength_11: 1;
        export { minLength_11 as minLength };
        let maxLength_11: 255;
        export { maxLength_11 as maxLength };
    }
    namespace phone {
        let type_26: "String";
        export { type_26 as type };
        let minLength_12: 1;
        export { minLength_12 as minLength };
        let maxLength_12: 255;
        export { maxLength_12 as maxLength };
    }
    namespace price {
        let type_27: "Number";
        export { type_27 as type };
        let format_5: "float";
        export { format_5 as format };
    }
    namespace region {
        let type_28: "String";
        export { type_28 as type };
        let minLength_13: 1;
        export { minLength_13 as minLength };
        let maxLength_13: 255;
        export { maxLength_13 as maxLength };
    }
    namespace telegram_chat_id {
        let type_29: "String";
        export { type_29 as type };
        let minLength_14: 1;
        export { minLength_14 as minLength };
        let maxLength_14: 255;
        export { maxLength_14 as maxLength };
    }
    namespace tg_comment {
        let type_30: "String";
        export { type_30 as type };
        let minLength_15: 1;
        export { minLength_15 as minLength };
        let maxLength_15: 255;
        export { maxLength_15 as maxLength };
    }
    namespace tg_link {
        let type_31: "String";
        export { type_31 as type };
        let minLength_16: 1;
        export { minLength_16 as minLength };
        let maxLength_16: 255;
        export { maxLength_16 as maxLength };
    }
    namespace tg_login {
        let type_32: "String";
        export { type_32 as type };
        let deprecated_4: true;
        export { deprecated_4 as deprecated };
        let minLength_17: 1;
        export { minLength_17 as minLength };
        let maxLength_17: 255;
        export { maxLength_17 as maxLength };
    }
    namespace tg_password {
        let type_33: "String";
        export { type_33 as type };
        let deprecated_5: true;
        export { deprecated_5 as deprecated };
        let minLength_18: 1;
        export { minLength_18 as minLength };
        let maxLength_18: 255;
        export { maxLength_18 as maxLength };
    }
    namespace time_created {
        let type_34: "String";
        export { type_34 as type };
        let format_6: "Date";
        export { format_6 as format };
    }
    namespace time_updated {
        let type_35: "String";
        export { type_35 as type };
        let format_7: "Date";
        export { format_7 as format };
    }
    namespace timezone {
        let type_36: "String";
        export { type_36 as type };
        let format_8: "integer";
        export { format_8 as format };
    }
    namespace title {
        let type_37: "String";
        export { type_37 as type };
        let minLength_19: 1;
        export { minLength_19 as minLength };
        let maxLength_19: 255;
        export { maxLength_19 as maxLength };
    }
    namespace vk_comment {
        let type_38: "String";
        export { type_38 as type };
    }
    namespace vk_group_id {
        let type_39: "String";
        export { type_39 as type };
    }
    namespace vk_link {
        let type_40: "String";
        export { type_40 as type };
    }
    namespace yandex_metrica {
        let type_41: "String";
        export { type_41 as type };
    }
}
