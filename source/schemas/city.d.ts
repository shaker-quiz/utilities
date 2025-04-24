export namespace CityColumns {
    let address: "address";
    let alias: "alias";
    let chatapp_category: "chatapp_category";
    let chatapp_legacy: "chatapp_legacy";
    let chatapp_line: "chatapp_line";
    let chatapp_tag: "chatapp_tag";
    let chatapp_user: "chatapp_user";
    let country: "country";
    let currency: "currency";
    let custom_html: "custom_html";
    let custom_script: "custom_script";
    let description: "description";
    let email: "email";
    let game_time: "game_time";
    let id: "id";
    let inst_comment: "inst_comment";
    let inst_link: "inst_link";
    let inst_login: "inst_login";
    let inst_password: "inst_password";
    let is_default: "is_default";
    let is_franchise: "is_franchise";
    let max_members_count: "max_members_count";
    let meta_description: "meta_description";
    let meta_title: "meta_title";
    let min_members_count: "min_members_count";
    let name: "name";
    let phone: "phone";
    let price: "price";
    let region: "region";
    let telegram_chat_id: "telegram_chat_id";
    let tg_comment: "tg_comment";
    let tg_link: "tg_link";
    let tg_login: "tg_login";
    let tg_password: "tg_password";
    let time_created: "time_created";
    let time_updated: "time_updated";
    let timezone: "timezone";
    let title: "title";
    let vk_comment: "vk_comment";
    let vk_group_id: "vk_group_id";
    let vk_link: "vk_link";
    let yandex_metrica: "yandex_metrica";
}
export namespace CityColumnDescriptors {
    export namespace address_1 {
        let type: "String";
        let minLength: 1;
        let maxLength: 255;
    }
    export { address_1 as address };
    export namespace alias_1 {
        let type_1: "String";
        export { type_1 as type };
        let minLength_1: 1;
        export { minLength_1 as minLength };
        let maxLength_1: 255;
        export { maxLength_1 as maxLength };
    }
    export { alias_1 as alias };
    export namespace chatapp_category_1 {
        let type_2: "String";
        export { type_2 as type };
    }
    export { chatapp_category_1 as chatapp_category };
    export namespace chatapp_legacy_1 {
        let type_3: "Boolean";
        export { type_3 as type };
    }
    export { chatapp_legacy_1 as chatapp_legacy };
    export namespace chatapp_line_1 {
        let type_4: "String";
        export { type_4 as type };
        let minLength_2: 1;
        export { minLength_2 as minLength };
        let maxLength_2: 255;
        export { maxLength_2 as maxLength };
    }
    export { chatapp_line_1 as chatapp_line };
    export namespace chatapp_tag_1 {
        let type_5: "String";
        export { type_5 as type };
        let minLength_3: 1;
        export { minLength_3 as minLength };
        let maxLength_3: 255;
        export { maxLength_3 as maxLength };
    }
    export { chatapp_tag_1 as chatapp_tag };
    export namespace chatapp_user_1 {
        let type_6: "String";
        export { type_6 as type };
        let minLength_4: 1;
        export { minLength_4 as minLength };
        let maxLength_4: 255;
        export { maxLength_4 as maxLength };
    }
    export { chatapp_user_1 as chatapp_user };
    export namespace country_1 {
        let type_7: "String";
        export { type_7 as type };
        let minLength_5: 2;
        export { minLength_5 as minLength };
        let maxLength_5: 2;
        export { maxLength_5 as maxLength };
    }
    export { country_1 as country };
    export namespace currency_1 {
        let type_8: "String";
        export { type_8 as type };
        let minLength_6: 3;
        export { minLength_6 as minLength };
        let maxLength_6: 3;
        export { maxLength_6 as maxLength };
    }
    export { currency_1 as currency };
    export namespace custom_html_1 {
        let type_9: "String";
        export { type_9 as type };
    }
    export { custom_html_1 as custom_html };
    export namespace custom_script_1 {
        let type_10: "String";
        export { type_10 as type };
    }
    export { custom_script_1 as custom_script };
    export namespace description_1 {
        let type_11: "String";
        export { type_11 as type };
        let minLength_7: 1;
        export { minLength_7 as minLength };
        let maxLength_7: 255;
        export { maxLength_7 as maxLength };
    }
    export { description_1 as description };
    export namespace email_1 {
        let type_12: "String";
        export { type_12 as type };
        let minLength_8: 1;
        export { minLength_8 as minLength };
        let maxLength_8: 255;
        export { maxLength_8 as maxLength };
        export let format: "email";
    }
    export { email_1 as email };
    export namespace game_time_1 {
        let type_13: "String";
        export { type_13 as type };
        let format_1: "time";
        export { format_1 as format };
    }
    export { game_time_1 as game_time };
    export namespace id_1 {
        let type_14: "String";
        export { type_14 as type };
        let format_2: "uuid";
        export { format_2 as format };
    }
    export { id_1 as id };
    export namespace inst_comment_1 {
        let type_15: "String";
        export { type_15 as type };
        export let deprecated: true;
    }
    export { inst_comment_1 as inst_comment };
    export namespace inst_link_1 {
        let type_16: "String";
        export { type_16 as type };
        let deprecated_1: true;
        export { deprecated_1 as deprecated };
    }
    export { inst_link_1 as inst_link };
    export namespace inst_login_1 {
        let type_17: "String";
        export { type_17 as type };
        let deprecated_2: true;
        export { deprecated_2 as deprecated };
    }
    export { inst_login_1 as inst_login };
    export namespace inst_password_1 {
        let type_18: "String";
        export { type_18 as type };
        let deprecated_3: true;
        export { deprecated_3 as deprecated };
    }
    export { inst_password_1 as inst_password };
    export namespace is_default_1 {
        let type_19: "Boolean";
        export { type_19 as type };
    }
    export { is_default_1 as is_default };
    export namespace is_franchise_1 {
        let type_20: "Boolean";
        export { type_20 as type };
    }
    export { is_franchise_1 as is_franchise };
    export namespace max_members_count_1 {
        let type_21: "Number";
        export { type_21 as type };
        let format_3: "integer";
        export { format_3 as format };
    }
    export { max_members_count_1 as max_members_count };
    export namespace meta_description_1 {
        let type_22: "String";
        export { type_22 as type };
        let minLength_9: 1;
        export { minLength_9 as minLength };
        let maxLength_9: 255;
        export { maxLength_9 as maxLength };
    }
    export { meta_description_1 as meta_description };
    export namespace meta_title_1 {
        let type_23: "String";
        export { type_23 as type };
        let minLength_10: 1;
        export { minLength_10 as minLength };
        let maxLength_10: 255;
        export { maxLength_10 as maxLength };
    }
    export { meta_title_1 as meta_title };
    export namespace min_members_count_1 {
        let type_24: "Number";
        export { type_24 as type };
        let format_4: "integer";
        export { format_4 as format };
    }
    export { min_members_count_1 as min_members_count };
    export namespace name_1 {
        let type_25: "String";
        export { type_25 as type };
        let minLength_11: 1;
        export { minLength_11 as minLength };
        let maxLength_11: 255;
        export { maxLength_11 as maxLength };
    }
    export { name_1 as name };
    export namespace phone_1 {
        let type_26: "String";
        export { type_26 as type };
        let minLength_12: 1;
        export { minLength_12 as minLength };
        let maxLength_12: 255;
        export { maxLength_12 as maxLength };
    }
    export { phone_1 as phone };
    export namespace price_1 {
        let type_27: "Number";
        export { type_27 as type };
        let format_5: "float";
        export { format_5 as format };
    }
    export { price_1 as price };
    export namespace region_1 {
        let type_28: "String";
        export { type_28 as type };
        let minLength_13: 1;
        export { minLength_13 as minLength };
        let maxLength_13: 255;
        export { maxLength_13 as maxLength };
    }
    export { region_1 as region };
    export namespace telegram_chat_id_1 {
        let type_29: "String";
        export { type_29 as type };
        let minLength_14: 1;
        export { minLength_14 as minLength };
        let maxLength_14: 255;
        export { maxLength_14 as maxLength };
    }
    export { telegram_chat_id_1 as telegram_chat_id };
    export namespace tg_comment_1 {
        let type_30: "String";
        export { type_30 as type };
        let minLength_15: 1;
        export { minLength_15 as minLength };
        let maxLength_15: 255;
        export { maxLength_15 as maxLength };
    }
    export { tg_comment_1 as tg_comment };
    export namespace tg_link_1 {
        let type_31: "String";
        export { type_31 as type };
        let minLength_16: 1;
        export { minLength_16 as minLength };
        let maxLength_16: 255;
        export { maxLength_16 as maxLength };
    }
    export { tg_link_1 as tg_link };
    export namespace tg_login_1 {
        let type_32: "String";
        export { type_32 as type };
        let deprecated_4: true;
        export { deprecated_4 as deprecated };
        let minLength_17: 1;
        export { minLength_17 as minLength };
        let maxLength_17: 255;
        export { maxLength_17 as maxLength };
    }
    export { tg_login_1 as tg_login };
    export namespace tg_password_1 {
        let type_33: "String";
        export { type_33 as type };
        let deprecated_5: true;
        export { deprecated_5 as deprecated };
        let minLength_18: 1;
        export { minLength_18 as minLength };
        let maxLength_18: 255;
        export { maxLength_18 as maxLength };
    }
    export { tg_password_1 as tg_password };
    export namespace time_created_1 {
        let type_34: "String";
        export { type_34 as type };
        let format_6: "Date";
        export { format_6 as format };
    }
    export { time_created_1 as time_created };
    export namespace time_updated_1 {
        let type_35: "String";
        export { type_35 as type };
        let format_7: "Date";
        export { format_7 as format };
    }
    export { time_updated_1 as time_updated };
    export namespace timezone_1 {
        let type_36: "String";
        export { type_36 as type };
        let format_8: "integer";
        export { format_8 as format };
    }
    export { timezone_1 as timezone };
    export namespace title_1 {
        let type_37: "String";
        export { type_37 as type };
        let minLength_19: 1;
        export { minLength_19 as minLength };
        let maxLength_19: 255;
        export { maxLength_19 as maxLength };
    }
    export { title_1 as title };
    export namespace vk_comment_1 {
        let type_38: "String";
        export { type_38 as type };
    }
    export { vk_comment_1 as vk_comment };
    export namespace vk_group_id_1 {
        let type_39: "String";
        export { type_39 as type };
    }
    export { vk_group_id_1 as vk_group_id };
    export namespace vk_link_1 {
        let type_40: "String";
        export { type_40 as type };
    }
    export { vk_link_1 as vk_link };
    export namespace yandex_metrica_1 {
        let type_41: "String";
        export { type_41 as type };
    }
    export { yandex_metrica_1 as yandex_metrica };
}
