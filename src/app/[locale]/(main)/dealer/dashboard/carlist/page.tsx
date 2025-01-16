import AddEditionalPopup from '@/components/Dashboard/DealerDashboard/AddCarListing/AddEditionalPopup';
import CarLists from '@/components/Dashboard/DealerDashboard/CarLists';
import { useTranslations } from 'next-intl';
import React from 'react';

const Page = () => {
    const t = useTranslations('dashboard.car_list');
    const txt = {
        "title": t("title"),
        "in_use": t('in_use'),
        "available": t("available"),
        "add_listing": t("add_listing")
    }

    const f = useTranslations("dashboard.car_list.add_car_form")

    const addCarFormTxt = {
        "add_title": f("add_title"),
        attach_image: f('attach_image'),
        "car_name": f("car_name"),
        "details": f("details"),
        "brand": f("brand"),
        "model": f("model"),
        "country": f("country"),
        "price": f("price"),
        "year": f("year"),
        "power": f("power"),
        "mileage": f("mileage"),
        "vin": f("vin"),
        "body_style": f("body_style"),
        "interior_color": f("interior_color"),
        "exterior_color": f("exterior_color"),
        "fuel_type": f("fuel_type"),
        "drive": f("drive"),
        add_editional: f("add_editional"),
        submit: f('submit'),
        update: f('update')
    }

    return (
        <div>
            <CarLists txt={txt} formTxt={addCarFormTxt} />
        </div>
    );
};

export default Page;