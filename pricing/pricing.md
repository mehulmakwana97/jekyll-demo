---
layout: page
title: onCourse Pricing
permalink: /pricing/
redirect_from:
  - /pricing
---
<div class="clearfix pricing-top-action">
  <p class="pull-xs-left">
    <input id="annual-toggle" checked data-toggle="toggle" data-on="Annual" data-off="Monthly" data-onstyle="primary" data-offstyle="info" type="checkbox">
  </p>

  <p class="pull-xs-right">
    <a role="button" href="{{ site.baseurl }}/pricing/ultimate" class="btn btn-secondary app-btn btn-arrow" role="button">Our ultimate custom plan</a>
  </p>
</div>
<br>

<div class="clearfix pricing-container">
  <div class="row row-item row-simple-text">
    <div class="col-price col-sm-6 col-xs-6 col-item-1">
      <div class="info-text">Completely free.</div>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-2">
      <div class="info-text">Ideal for small training organisations just getting started.</div>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-3">
      <div class="info-text">Our most popular plan.</div>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-4">
      <div class="info-text">Perfect if you want all the features onCourse has to offer.</div>
    </div>
  </div>
  <div class="row row-item row-price-block">
    <div class="col-price col-sm-6 col-xs-6 col-item-1">
      <span class="col-label">Community</span>
      <span class="price">
        <span class="price-rate">Free</span>
        <span class="price-rate-annual">Free</span>
      </span>
      <span class="col-text">&nbsp;</span>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-2">
      <span class="col-label">Light</span>
      <span class="price">
        <span class="price-rate">$190</span>
        <span class="price-rate-annual">$162</span>
      </span>  
      <span class="col-text">per month</span>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-3">
      <span class="col-label">Professional</span>
      <span class="price">
        <span class="price-rate">$490</span>
        <span class="price-rate-annual">$417</span>
      </span>
      <span class="col-text">per month</span>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-4">
      <span class="col-label">Enterprise</span>
      <span class="price">
        <span class="price-rate">$990</span>
        <span class="price-rate-annual">$842</span>
      </span>
      <span class="col-text">per month</span>
    </div>
  </div>

{% assign class_right = 'col-price col-sm-6 col-xs-6' %}
{% for row in site.data.pricing-table-oncourse %}
  <div class="row row-item row-details row-item-{{ forloop.index }}">
    {% if row.section %}
      <div class="{{ class_right }} col-item-{{ forloop.index }} highlight">{{ row.title }}</div>
    {% else %}
      {% for item in row.plans %}
        <div class="{{ class_right }} col-item-{{ forloop.index }}">
          <span class="col-desc{% unless item %} has-no-plan{% endunless %}">
            {{ item.title | default: row.title }}
            {% if item %}<i class="glyphicon glyphicon-chevron-down"></i>{% endif %}
          </span>
          <div class="plan-details">
            {% if item %}{{ item.more | default: row.more }}{% endif %}
          </div>
        </div>
      {% endfor %}
    {% endif %}
  </div>
{% endfor %}
  <div class="row row-action row-item">
    <div class="col-price col-sm-6 col-xs-6 col-item-1">
      <a role="button" href="{{ site.baseurl }}/download" class="btn btn-primary">Download now</a>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-2">
      <a role="button" href="{{ site.baseurl }}/buy" class="btn btn-primary">Purchase now</a>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-3">
      <a role="button" href="{{ site.baseurl }}/buy" class="btn btn-primary">Purchase now</a>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-4">
      <a role="button" href="{{ site.baseurl }}/buy" class="btn btn-primary">Purchase now</a>
    </div>
  </div>
  <div class="pricing-calculation">
    <div class="row">
      <div class="col-sm-12">
        <p>
          All paid onCourse systems come with a beautiful website to display your courses and take enrolments.
        </p>
        <p></p>
        <input id="pricing-in-slider" data-slider-id='pricing-in-slider' type="text" data-slider-min="1" data-slider-max="4" data-slider-step="1" data-slider-value="1"/>
        <small>Website annual ecommerce turnover</small>
      </div>
      <div class="col-sm-10 pull-sm-right">
        <div class="panel panel-default price-panel">
          <div class="panel-heading">
            <div class="col-label">Website</div>
            <p class="price-rate">$<span>0</span></p>
            <p class="price-rate-annual">$<span>0</span></p>
            <p>per month</p>
          </div>
          <div class="panel-body">
            <div class="row data-toggle">
              <div class="col-xs-12">
                eCommerce fee
              </div>
              <div class="col-xs-12">
                <span class="ecommerce-text">6</span>%
                <i class="pull-xs-right glyphicon glyphicon-chevron-down"></i>
              </div>
            </div>
            <div class="row toggle-details">
              <div class="col-xs-24">
                A usage fee based on the total of the student charges.<br><br>
              </div>
            </div>
            <div class="row data-toggle">
              <div class="col-xs-12">
                Per transaction
              </div>
              <div class="col-xs-12">
                <span class="transaction-text">110</span> cents
                <i class="pull-xs-right glyphicon glyphicon-chevron-down"></i>
              </div>
            </div>
            <div class="row toggle-details">
              <div class="col-xs-24">
                A fee per payment processed.<br><br>
              </div>
            </div>
            <br/>
            <div class="row data-toggle">
              <div class="col-xs-24">
                Load balanced servers and 99.5% SLA
                <i class="pull-xs-right glyphicon glyphicon-chevron-down"></i>
              </div>
            </div>
            <div class="row toggle-details">
              <div class="col-xs-24">
                We recognise that your website needs to be up. Always. We take care of monitoring, backups and full redundancy in an Australian data centre.<br><br>
              </div>
            </div>
            <div class="row data-toggle">
              <div class="col-xs-24">
                Student and tutor portals
                <i class="pull-xs-right glyphicon glyphicon-chevron-down"></i>
              </div>
            </div>
            <div class="row toggle-details">
              <div class="col-xs-24">
                Access to timetables, attendance marking and communication tools. USI verification and AVETMISS collection.<br><br>
              </div>
            </div>
            <div class="row data-toggle not-free">
              <div class="col-xs-24">
                Your domain
                <i class="pull-xs-right glyphicon glyphicon-chevron-down"></i>
              </div>
            </div>
            <div class="row toggle-details not-free">
              <div class="col-xs-24">
                Any URL you choose. We'll even organise the SSL certificate.<br><br>
              </div>
            </div>
            <div class="row data-toggle not-free">
              <div class="col-xs-24">
                Domain hosting
                <i class="pull-xs-right glyphicon glyphicon-chevron-down"></i>
              </div>
            </div>
            <div class="row toggle-details not-free">
              <div class="col-xs-24">
                Our three domain servers on two continents will ensure your domain is always available.<br><br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<div class="clearfix plans-support">
  <div class="title-01"><span>All plans</span> give you</div>
  <div class="row">
    <div class="col-lg-8 col-sm-12 col-xs-24 plans-support-item">
      <div class="plans-support-content">
        <img src="{{ site.baseurl }}/assets/img/icons/no-preview-courses.png" class="plans-image" />
        <h4 class="plans-title">Unlimited enrolments</h4>
        <p class="plans-desc">Use onCourse to process 100 or 1,000,000 enrolments per year. No artificial limits.</p>
      </div>
    </div>

    <div class="col-lg-8 col-sm-12 col-xs-24 plans-support-item">
      <div class="plans-support-content">
        <img src="{{ site.baseurl }}/assets/img/icons/no-preview-courses.png" class="plans-image" />
        <h4 class="plans-title">Upgrades</h4>
        <p class="plans-desc">Unlimited product upgrades. Our cloud customers get an upgrade roughly every month.</p>
      </div>
    </div>

    <div class="col-lg-8 col-sm-12 col-xs-24 plans-support-item">
      <div class="plans-support-content">
        <img src="{{ site.baseurl }}/assets/img/icons/no-preview-courses.png" class="plans-image" />
        <h4 class="plans-title">AVETMISS and Traineeship reporting</h4>
        <p class="plans-desc">onCourse supports the AVETMISS and traineeship export flavours for every state in Australia.</p>
      </div>
    </div>

    <div class="col-lg-8 col-sm-12 col-xs-24 plans-support-item">
      <div class="plans-support-content">
        <img src="{{ site.baseurl }}/assets/img/icons/no-preview-courses.png" class="plans-image" />
        <h4 class="plans-title">Integrated email</h4>
        <p class="plans-desc">Send as many emails as you want to students, tutors and other contacts at no cost.</p>
      </div>
    </div>

    <div class="col-lg-8 col-sm-12 col-xs-24 plans-support-item">
      <div class="plans-support-content">
        <img src="{{ site.baseurl }}/assets/img/icons/no-preview-courses.png" class="plans-image" />
        <h4 class="plans-title">training.gov.au data updates</h4>
        <p class="plans-desc">Daily data feeds built into the software so you'll always have correct data.</p>
      </div>
    </div>

    <div class="col-lg-8 col-sm-12 col-xs-24 plans-support-item">
      <div class="plans-support-content">
        <img src="{{ site.baseurl }}/assets/img/icons/no-preview-courses.png" class="plans-image" />
        <h4 class="plans-title">User documentation</h4>
        <p class="plans-desc">Our comprehensive documentation of the product as web pages, PDF and inside the application. Also available in editable form you can customise.</p>
      </div>
    </div>
  </div>
</div>